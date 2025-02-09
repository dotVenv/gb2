#django imports
import django.core.exceptions as dce 
from django.utils import timezone
from django.conf import settings

#imports
from gb_api.models import gbUser, MFA_Rotator
import pyotp
import qrcode
import boto3
from botocore.exceptions import ClientError
import datetime
import random
import os 

class MFAHelper():
    '''mfa helper/rotator'''
    
    def __init__(self, request):
        
        self.request = request
        self.__get_user__()
        self.has_mfa = self.__check_mfa__()
        
    
    
    def __generate_keys__(self):
        '''generate a key for the users mfa/2fa'''
        
        
        self.b32 = pyotp.random_base32()
        self.hex = pyotp.random_hex()
        self.provisioning_data = {'name':self.request.user.email, 'issuer': 'Gamers-Bounty'}
        

    
    def __get_user__(self):
        '''get the user object from the db'''
        
        
        self.cu = gbUser.objects.get(id=self.request.user.id)
        if self.cu:
            return True
        
        return False
        
    
    def __check_mfa__(self):
        
        '''check if the current users account is locked'''   
        #if mfa is active
        try:
            self.mfa = MFA_Rotator.objects.get(user_id=self.request.user.id)
            if self.mfa:
                return True
        except dce.ObjectDoesNotExist:
            return False

        return False
    
    
    def __generate_qr__(self):    
        '''generate QR code to display to the user'''
        
        self.pytotp = pyotp.totp.TOTP(self.b32).provisioning_uri(name=self.provisioning_data['name'], issuer_name=self.provisioning_data['issuer'])
        if self.pytotp:
            self.qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=5,
                border=2,
            )
            self.qr.add_data(self.pytotp)
            self.qr.make(fit=True)

            self.img = self.qr.make_image(fill_color="black", back_color="white")
            appender = f'{self.request.user.id}QR{random.randint(111,9999)}{self.request.user.email[0:2]}-{random.randint(111,9999)}'
            self.img.save(os.path.join('./mediafiles/tmphold/', f'{appender}.png'), 'PNG')
            s3 = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)
            
            try:
                response = s3.upload_file(os.path.join('./mediafiles/tmphold/', f'{appender}.png') ,"gbqrcodes", Key=f'{appender}.png', ExtraArgs={'ACL': 'public-read','ContentType':'image/png'})
                self.mfa_return = [self.b32,f"https://{settings.AWS_BUCKS['qrcode']}{appender}.png"]
                self.__delet_qr__(appender)
            except ClientError as e:
                self.__delet_qr__(appender)
             
         
        self.__delet_qr__(appender)
  
        
    def __delet_qr__(self, appender):
        '''delete the current QR stored in tmp folder'''
        
        
        if os.path.isfile(os.path.join('./mediafiles/tmphold/', f'{appender}.png')):
            os.remove(os.path.join('./mediafiles/tmphold/', f'{appender}.png'))
        
                    
    def create_mfa(self):
        '''create a new mfa object for the user'''
        
        self.__generate_keys__()
        self.cu.mfa_active = True
        try:
            self.mfa = MFA_Rotator.objects.create(user_id=self.request.user.id, b32=self.b32, bhex=self.hex, last_used=timezone.now())
            if self.mfa:
                self.__generate_qr__()
                if self.mfa_return: 
                    self.cu.save()
                    return True
        except TypeError as e:
            raise Exception(f'Something went wrong, rolling back sqlcommit \n {e}')
            return False
        except NameError as e:
            raise Exception(f'Something went wrong, rolling back sqlcommit \n {e}')
            return False 
      
        return False
            

    def __get_mfa_user__(self):
        '''get the current mfa object and return it'''
        
        try:
            return MFA_Rotator.objects.get(user_id=self.request.user.id)
        except dce.ObjectDoesNotExist:
            return None 
        return None
    
    def _verify_(self):
        '''verify the current mfa_code'''
        
        self.is_valid = False
        
        self.mfa = self.__get_mfa_user__()
        if self.mfa is not None:
            current_totp = int(pyotp.totp.TOTP(self.mfa.b32).now())
            print(self.request.POST)
            current_totp_attempt = int(self.request.POST.get('input[otp_attempt]'))
            if current_totp_attempt == current_totp:
                self.is_valid = True

        return 
        
    
    
    