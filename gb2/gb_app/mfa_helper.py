#django imports


#imports
from gb_api.models import gbUser
import pyotp
import qrcode



class MFAHelper():
    '''mfa helper/rotator'''
    
    def __init__(self, request):
        
        self.request = request
        self.__get_user__()
        self.has_mfa = self.__check_mfa__()
        
    
    
    def __generate_key__(self):
        '''generate a key for the users mfa/2fa'''
        
        
        self.b32 = pyotp.random_base32()
        self.hex = pyotp.random_hex()
        self.provisioning_data = {'name':self.request.user.email, 'issuer': 'Gamers-Bounty'}
        

    
    def __get_user__(self):
        '''get the user object from the db'''
        
        
        self.cu = gbUser.objects.get(user_id=self.request.user.id)
        if self.cu:
            return True
        
        return False
        
    
    def __check_mfa__(self):
        
        '''check if the current users account is locked'''   
        #if mfa is active
        if self.cu.mfa_active == 1:
            return True
        return False
    
    
    

        
    
    
    