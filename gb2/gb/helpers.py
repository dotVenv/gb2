#django imports
from django.contrib.auth import authenticate, login, logout 
from django.http import HttpResponse
from django.db import transaction

#app imports 
from gb_api import serializers, helpers
from .forms import LoginForm, SignupForm
from gb_api.models import gbUser





#handle the current session (unauth, all auth sessions redir to dashboard.)
class Current_Session():
    '''class to handle the inital current session pre login'''
    
    def __init__(self, request):
        '''initialize the class parameters'''
            
        self.request = request


    def login(self):
        '''login the current user'''
        
        if self.request.method == 'POST':
            
            #set the user info
            self.username = self.request.POST.get('uname')
            self.pwd = self.request.POST.get('pwd')

            if not self.username or not self.pwd:
                return False
            
            data = {'uname': self.username, 'pwd': self.pwd}
            
            #check if form is valid
            validate_login = LoginForm(data)
            
            if validate_login.is_valid():
                self.username = validate_login.cleaned_data['uname']
                self.pwd = validate_login.cleaned_data['pwd']
                return True 
       
        return False
    
    def signup(self):
        '''validate and signup the user if data is valid'''
        
        self.email = self.request.POST.get('email')
        self.username = self.request.POST.get('uname')
        self.pwd = self.request.POST.get('pwd')
        self.rpwd = self.request.POST.get('rpwd')
        self.tos = self.request.POST.get('tos')
        
        if not self.email or not self.username or not self.pwd or not self.rpwd:
            return False, 'Some fields were missing, please try again.'
        if self.tos is False or not self.tos:
            return False, 'Please accept the terms and conditions and to continue.'
        if not self.pwd == self.rpwd:
            return False, 'Password do not match please try again.'
        
        validate_signup = SignupForm({'email': self.email, 'uname': self.username, 'pwd': self.pwd, 'rpwd': self.rpwd, 'tos': self.tos})
        
        if validate_signup.is_valid():
            self.email = validate_signup.cleaned_data['email']
            self.username = validate_signup.cleaned_data['uname']
            self.pwd = validate_signup.cleaned_data['pwd']
            self.rpwd = validate_signup.cleaned_data['rpwd']
            self.tos = validate_signup.cleaned_data['tos']
            self.validated_data = validate_signup
            if self.tos is False:
                return False, 'Please accept the terms and conditions and to continue.'
            
            #check if user or email already exist
            check_usr = gbUser.objects.filter(username=self.username).exists()
            if check_usr:
                return False, 'Username already exists, please try again.'
            check_usr = gbUser.objects.filter(email=self.email).exists()
            if check_usr:
                return False, 'Email already exists, please try again.';
            
            return True, 'Signup successful, you may now sign in.'
        return False, 'Signup failed, please refresh and try again'
    
    def register_user(self):
        '''save the validated signup data to the db'''
        
        #save new user with transaction
        with transaction.atomic():
            new_user = gbUser.objects.create_user(self.username, self.email, self.pwd)
            if new_user:
                x_forwarded_for = self.request.META.get('HTTP_X_FORWARDED_FOR')
                if x_forwarded_for:
                    ip = x_forwarded_for.split(',')[0]
                else:
                    ip = self.request.META.get('REMOTE_ADDR')
                if ip:
                    new_user.ip_address = ip
                    
                new_user.save()
                #send verification email here
                #TODO
                ##
                return True
            else:
                return False
                

                
            
            
    def setLoginCookie(self, rememberuser):
        '''set the cookie for the current user if reponse is true'''
        
        if rememberuser:
            cookie_login_res = HttpResponse(f'{self.username}_cookie')
            cookie_login_res.set_cookie('cc', cookie_login_res)
        
        return 
        
        