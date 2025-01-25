#django imports
import django.core.exceptions as dce
from django.utils import timezone


#app imports
from gb_api.models import gbUser, EmailVerification, AccountPreference
from gb_api.email_helpers import EmailHelper
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
            acc_pref = AccountPreference.objects.filter(user=self.cu.id)
            if self.cu.account_verified is False:
                self.serialized['setup_step'] = 1
            elif not acc_pref.exists():
                self.serialized['setup_step'] = 2
            elif not self.cu.first_name or not self.cu.last_name:
                self.serialized['setup_step'] = 3
        
            
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
            case 'email-submit':
                setupdata = EmailVerification.objects.get(user=self.request.user.id)
                if not self.request.user.account_verified:
                    setupdata.attempts = setupdata.attempts + 1
                    #if otp is expired
                    otpInput = str(self.request.POST.get('userInput'))
                    if otpInput == 'expired':
                        setupdata.expired = True
                        setupdata.save()
                        self.setup_data={'step': 'expired'}
                        return True
                    
                    #if otp is not expired
                    otpInput = int(otpInput)
                    if int(setupdata.code) == int(self.request.POST.get('userInput')):
                        cu = gbUser.objects.get(id=self.request.user.id)
                        cu.account_verified = True
                        cu.save()
                        #check for next step
                        if not self.request.user.first_name or not self.request.user.last_name:
                            setupdata.expired = True
                            setupdata.attempts = 0
                            setupdata.save()
                            self.setup_data = {'step': 'passed'}
                        return True
                    
                    self.setup_data  = {'otp': 'invalid'}
                    setupdata.save()
                    
                    return True
                    
            case 'email-revalidate':
                self.setup_data = {'step': 'revalidate'}
                new_email = EmailHelper()
                new_email.email_data['recipient'] = str(self.request.user.email)
                new_email.email_data['username'] = str(self.request.user.username)
                new_email.verify_account(request=self.request)             
                return True 
                
            
            case 'preferences':
                print('ready to update preferences')
                console = str(self.request.POST.get('userInput[console]'))
                server = str(self.request.POST.get('userInput[server]'))
                if not console or not server:
                    return False
                self.get_user()
                if self.cu:
                    acc_pref = AccountPreference.objects.create(user=self.cu,  server=server, console=console)
                    if acc_pref:
                        acc_pref.save()
                        self.setup_data = {'step': 'passed'}
                        return True
                   
                self.setup_data =  {'step': 'failed'}
                return False
                
    
    
        return False
        
        
        