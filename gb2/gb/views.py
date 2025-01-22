#djano imports
from django.shortcuts import render,redirect
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login, logout 
import django.core.exceptions as dce


#app imports 
from . import helpers as hlp 
from .response_helpers import Response_Helpers as getres
from .oauth_helpers import Google_Auth 


#global variables

# Create your views here.
class UIViews(TemplateView):
    
    def index(self, request):
    
        
        context = {}
        
        return render(request, 'gb/templates/index.html', context=context)
    
    def about_us(self, request):
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
    
    def freq_asked(self, request):
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
        
    def contact_us(self, request):
        
        
        if request.method == 'POST':
            contact_sub = hlp.Current_Session(request=request).submit_contactus()
            if contact_sub is True:
                return getres().res('200')
            else:
                return getres().res('500')
            
            
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
    
    def login_view(self, request):
        '''login function for the user'''
        
        try:
            if request.method == 'POST':
                
                login_user = hlp.Current_Session(request=request)
                
                if login_user.login():
                    user_auth = authenticate(request, username=login_user.username, password=login_user.pwd)
                    if user_auth is not None:
                        login(request, user_auth)
                        
                        #login_user.setLoginCookie(request.POST.get('ru'))
                        request.session.modified = True
                    
                        return getres().res('200')
                    
                    
                return getres().res('401')
            else:
                return getres().res('403')
        except dce.RequestAborted:
            return getres().res('401')
        
    
    def signup_view(self, request):
        '''signup the user with the given request data'''
        
        
        try:
            if request.method == 'POST':
                signup = hlp.Current_Session(request=request)
                submit_signup = signup.signup()
                if submit_signup[0] is True:
                    if signup.register_user():
                        return getres().res('200',new_msg=submit_signup[1])
                    else:
                        return getres().res('401', 'Something went wrong please try again.')
                return getres().res('401', new_msg=submit_signup[1])
                
                return getres().res('401', new_msg=submit_signup[1])
            else:
                return getres().res('403')
        except dce.RequestAborted:
            return getres().res('401')
    
    
    
        
    def logout_view(self, request):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        
        return redirect('index')
    
    def init_check(self, request):
        '''check if the user is logged initally'''
        
        if request.user.is_authenticated:
            return getres().res('200', new_msg={'is_auth': True, 'usr':request.user.username})
        elif request.user.is_anonymous:
            return getres().res('200', new_msg={'is_auth': False, 'usr':'Guest User'})
            
        return
    
    
    
    #oauth signup/login and callbacks
    def oauth_google(self, request):
        '''oauth signup for specified request'''
        
        #initiate oauth
        oauth_google = Google_Auth(request)
        oauth_google.init_auth()
        if oauth_google.load_check == 'failed':
            return getres().res('500', new_msg='something went wrong please try again later.')
        return redirect(oauth_google.authorization_url)
        
            
        return
    
    def oauth_google_callback(self, request):
        '''callback for google authentication'''
        
        #initial oauth
        oauth_google = Google_Auth(request)
        oauth_google.fetch_data()
        if oauth_google.load_check == 'failed':
            return getres().res('500', new_msg='something went wrong please try again later.')
        
        return
        
    