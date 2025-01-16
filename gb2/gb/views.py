#djano imports
from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth import authenticate, login, logout 
import django.core.exceptions as dce

#app imports 
from . import helpers as hlp 
from .response_helpers import Response_Helpers as getres


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
        
        context = {}
        return render(request, 'gb/templates/index.html', context=context)
    
    def login_view(self, request):
        '''login function for the user'''
        
        #call helper login function
        try:
            if request.method == 'POST':
                
                login_user = hlp.Current_Session(request=request)
                
                if login_user.login():
                    user_auth = authenticate(request, username=login_user.username, password=login_user.pwd)
                    if user_auth is not None:
                        login(request, user_auth)
                        login_user.setLoginCookie(request.POST.get('ru'))
                            
                        request.session.modified = True
                    
                        return getres().res('200')
                    
                    
                return getres().res('401')
            else:
                return getres().res('403')
        except dce.RequestAborted:
            return getres().res('401')
    
    def logout_view(self):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        #lgout.delete_cookie('cc')
        return redirect('index')
    
    def init_check(self):
        '''check if the user is logged initally'''
        
        if request.user.is_authenticated:
            print('User is authenticated')
        elif request.user.is_anonymous:
            print('Unknown user')