#django imports
import django.core.exceptions as dce
from django.utils import timezone


#app imports
from gb_api.models import gbUser, EmailVerification
import datetime

class UserHelper():
    '''define a user helper to handle actions for the users profile'''
    
    def __init__(self, request):
        '''initialize the User helper class'''
        self.request = request
        self.response = {}
        

    def is_valid_req(self, skip=False):
        '''check if the uid passed in to the request is the same as the request user'''
        
        #if passed in externally
      
        self.uid = int(self.request.POST.get('uid'))
        
        if not self.uid:
            return None
        
        if self.uid != self.request.user.id:
            return None
        
            
        return True
        
    
    def get_user(self):
        '''get the user data to return to the view'''
        
        try:
            self.cu = gbUser.objects.get(id=self.uid)
            
        except dce.ObjectDoesNotExist:
            return None
        

        self.serialized = {
            "username": str(self.cu.username),
            "mfa": bool(self.cu.mfa_active),
            "profile_pic": str(self.cu.profile_pic),
            "fname": str(self.cu.first_name),
            "lname": str(self.cu.last_name)
        }
        
        return True
        
        
        
    
    def setupchecks(self):
        '''run checks if a check is invalid/false return will be empty/none'''
        
        #should always return true unless an error occr
        if self.__check_setupsteps():
            return True
        return False
    
        
    def __check_setupsteps(self):
        '''checks which steps were complete and returns a value based on which step, (5 if completed)'''  
        
        if self.cu:
           if self.cu.account_verified is False:
            self.serialized['setup_step'] = 1
            
        return True
    
    
    def get_setupdata(self):
        '''return the data for the current setup step '''
        
        
        toget = str(self.request.POST.get('fetchStep'))
        
        match toget:
            case 'email':
                setupdata = EmailVerification.objects.get(user=self.request.user.id)
                if not self.request.user.account_verified:
                    self.setup_data = {
                        'created_at': setupdata.created_at,
                        'time_left': datetime.datetime.strftime(setupdata.created_at + datetime.timedelta(minutes=10),'%Y-%m-%d %H:%M:%S:%Z').replace(':UTC', ' UTC'),
                        'expired': setupdata.expired,
                        'attempts': setupdata.attempts,
                        
                    }
                    return True
               
    
    
        return False
        
        
        