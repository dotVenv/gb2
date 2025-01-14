#djano imports
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login, logout 


#app imports 
from . import helpers as hlp 
from .response_helpers import Response_Helpers as getres


#global variables

# Create your views here.
class UIViews(TemplateView):
    
    def index(self, request):
        
        context = {}
        auth_status = None
        if not request.user.is_authenticated and request.user.is_anonymous:
            auth_status = 'Anonymous User'
        else:
            auth_status = 'Authenticated User'
        print(f'{ auth_status }')
        
        return render(request, 'gb/templates/index.html', context=context)
    
    def about_us(self, request):
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
    
    def freq_asked(self, request):
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
        
    def contact_us(self, request):
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
    
    def login_view(self, request):
        '''login function for the user'''
        
        #call helper login function
        if request.method == 'POST':
            login_user = hlp.Current_Session(request=request)
            if login_user.login():
                user_auth = authenticate(request, username=login_user.username, password=login_user.pwd)
                if user_auth is not None:
                    login(request, user_auth)
                    print(f'{request.user.is_authenticated}')
                    request.session.modified = True
                    return getres().res('200')
                
                
            return getres().res('401')
        else:
            return getres().res('403')