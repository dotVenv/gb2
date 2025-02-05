#django imports
import django.core.exceptions as dce
from django.utils import timezone


#app imports
from gb_api.models import gbUser, EmailVerification, AccountPreference, Platform, Membership, Wallet
from gb_api.email_helpers import EmailHelper
import datetime

class UserHelper():
    '''define a user helper to handle actions for the users profile'''
    
    def __init__(self, request):
        '''initialize the User helper class'''
        self.request = request
        self.serialized = {}
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
        
    
    def __get_user__(self):
        '''get the user data to return to the view'''
        
        self.cu_ap = None
        try:
            self.cu = gbUser.objects.get(id=self.uid)
            self.cu_ap = AccountPreference.objects.get(user=self.cu)
            
        except dce.ObjectDoesNotExist:
            pass
        

        self.serialized = {
            "username": str(self.cu.username),
            "mfa": str(bool(self.cu.mfa_active)),
            "profile_pic": str(self.cu.profile_pic),
            "fname": str(self.cu.first_name),
            "lname": str(self.cu.last_name),
            "email": str(self.cu.email),
        
        }
        
       
        
        self.serialized['membership'] = 'none '
        if self.cu_ap:
            
            if not self.cu_ap.server:
                self.serialized['server'] = None
            else:
                self.serialized['server'] = self.cu_ap.server
            
            if not self.cu_ap.platform:
                self.serialized['platform'] = None
            else:
                self.serialized['platform'] = self.cu_ap.platform.name
            
            self.serialized['balance'] = self.cu_ap.wallet.balance
            self.serialized['entries'] = self.cu_ap.entries
            self.serialized['membership'] = self.cu_ap.membership.name
            
    
        

        return True
        
        
        
    
    def setupchecks(self):
        '''run checks if a check is invalid/false return will be empty/none'''
        
        #should always return true unless an error occr
        self.__get_user__()
        if self.__check_setupsteps():
            return True
        return False
    
        
    def __check_setupsteps(self):
        '''checks which steps were complete and returns a value based on which step, (5 if completed)'''  
        
        if self.cu:
            
            if self.cu.account_verified is False:
                self.serialized['setup_step'] = 1
                
                
            else:        
                acc_pref = AccountPreference.objects.filter(user=self.cu.id)
                if acc_pref.exists():
            
                    if not self.cu.first_name or not self.cu.last_name:
                        self.serialized['setup_step'] = 3
                    else:
                        self.serialized['setup_step'] = 4
                        
                if not acc_pref.exists():
                        self.serialized['setup_step'] = 2
           
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
                console = str(self.request.POST.get('userInput[console]'))
                server = str(self.request.POST.get('userInput[server]'))
                if not console or not server:
                    return False
                self.__get_user__()
                if self.cu:
                    acc_pref = AccountPreference.objects.filter(user=self.cu)
                    if not acc_pref:
                        new_wallet = Wallet.objects.create()
                        if new_wallet:
                            new_wallet.save()
                            acc_pref = AccountPreference.objects.create(user=self.cu,  server=server, platform=Platform.objects.get(name=console), membership=Membership.objects.get(name='free'), wallet=new_wallet)
                            if acc_pref:
                                acc_pref.save()
                                self.setup_data = {'step': 'passed'}
                                return True
                   
                self.setup_data =  {'step': 'failed'}
                return False
                
            case 'profile_update':
                
                fname = str(self.request.POST.get('userInput[firstname]'))
                lname = str(self.request.POST.get('userInput[lastname]'))
                state = str(self.request.POST.get('userInput[userstate]'))
                consent = str(self.request.POST.get('userInput[consent_verif]'))
                profile_pic = self.request.FILES.get('userInput[profilepic]')
                
                cu = gbUser.objects.get(id=self.request.user.id)
                if cu:
                    if not consent or not state:
                        self.setup_data = {'step': 'failed'}
                        return False
                    if profile_pic is not None:
                        cu.profile_pic = profile_pic
                    cu.first_name = fname
                    cu.last_name = lname
                    cu.state = state
                    cu.save()
                    self.setup_data = {'step': 'passed'}
                    return True
    
        return False
    
    
    def attempt_email_change(self):
        '''send a new otp to the current email, if correct update user after submission'''
        
        new_email = EmailHelper()
        new_email.email_data['recipient'] = str(self.request.user.email)
        new_email.email_data['username'] = str(self.request.user.username)
        return new_email.verify_account(request=self.request)  
       
        
    def update_account(self):
        '''update the account based on the poststep and inputs'''
        
        
        poststep = str(self.request.POST.get('poststep'))
    
        if not poststep: return False 

        match poststep:
            case 'update_account':
                email = str(self.request.POST.get('input[email]'))
                fname = str(self.request.POST.get('input[fname]'))
                lname = str(self.request.POST.get('input[lname]'))
                profile_pic = self.request.FILES.get('input[profile_pic]')
                
                #non empty fields  to be updated
                try:
                    cu = gbUser.objects.get(id=self.request.user.id)
                
                    if cu:
                        """if email: 
                            print('updating email')
                            cu.email = email"""
                        if fname: 
                            print('updating first')
                            cu.firstname = fname
                        if lname: 
                            print('updating last')
                            cu.lastname = lname
                        if profile_pic: 
                            print('updating pic')
                            cu.profile_pic = profile_pic
                        cu.save()
                        print('saving current user update')
                        return True
                except dce.RequestAborted:
                    return False
                except dce.ObjectDoesNotExist:
                    return False
                
        return False