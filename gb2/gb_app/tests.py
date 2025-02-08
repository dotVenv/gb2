from django.test import TestCase, Client
from django.conf import settings

import pyotp
import datetime
from django.utils import timezone
import qrcode
import random
import boto3
from botocore.exceptions import ClientError
import os 
        
# Create your tests here.
class SetupStepsTest(TestCase):
    
    """def test_email_setup(self):
        
        c = Client()
        res = c.post('/setup-steps', {'uid': 1, 'fetchType': 'email'})
        self.assertEqual(res.status_code, 200)"""
    pass


class TOTPTest(TestCase):
    
    def test_pyotp(self):
        '''test OTP for google'''
    
        
        totp = pyotp.TOTP("JBSWY3DPEHPK3PXP")
        print("Current OTP:", totp.now())
        hasTotp = False
        if totp:
            hasTotp = True
        
        self.assertEqual(hasTotp, True)    
    
    def test_pyotp_qr(self):
        '''test qr code otp'''
        
        self.pyotp = pyotp.totp.TOTP(pyotp.random_base32()).provisioning_uri(name='dev@venv.pro', issuer_name='Gamers Bounty')
        if self.pyotp:
            self.qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            self.qr.add_data(self.pyotp)
            self.qr.make(fit=True)
            appender = f'TEST{random.randint(111,9999)}-{random.randint(111,9999)}'
            self.img = self.qr.make_image(fill_color="black", back_color="white")
            self.img.save(os.path.join('./mediafiles/tmphold/', f'{appender}.png'), 'PNG')
            s3 = boto3.client('s3', aws_access_key_id=settings.AWS_ACCESS_KEY_ID, aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY)
            
            try:
                
                def test_response():
                    response = s3.upload_file(os.path.join('./mediafiles/tmphold/', f'{appender}.png') ,"gbqrcodes", Key=f'{appender}.png', ExtraArgs={'ACL': 'public-read','ContentType':'image/png'})
                    return True
                self.assertEqual(test_response(), True)
            except ClientError as e:
                logging.error(e)
                return False
