#django imports
import django.core.exceptions as dce


#app imports
from gb_api.models import gbUser

class UserHelper():
    '''define a user helper to handle actions for the users profile'''
    
    def __init__(self, request):
        '''initialize the User helper class'''
        self.request = request
        self.response = {}
        

    def is_valid_req(self, skip=False):
        '''check if the uid passed in to the request is the same as the request user'''
        
        #if passed in externally
      
        self.uid = self.request.POST.get('uid')
        
        if not self.uid:
            return None
        
        if int(self.uid) != self.request.user.id:
            return None
        
            
        return True
        
    
    def get_user(self):
        '''get the user data to return to the view'''
        
        try:
            self.cu = gbUser.objects.get(id=self.uid)
            
        except dce.ObjectDoesNotExist:
            return None
        

        self.serialized = {
            "username": self.cu.username,
            "mfa": self.cu.mfa_active,
            "profile_pic": str(self.cu.profile_pic),
            "fname": self.cu.first_name,
            "lname": self.cu.last_name,
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
    