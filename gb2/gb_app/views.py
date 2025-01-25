#djano imports
from django.shortcuts import render,redirect
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import  logout 
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
from .user_helpers import *
from gb.response_helpers import Response_Helpers as getres
from django_hosts.resolvers import reverse 


from cryptography.fernet import Fernet
        
class APPViews(TemplateView):
   
    
    @method_decorator(login_required) 
    def dashboard(self, request):
        '''return the dashboard view for the user'''

        
        context = {
            'new_announc':'Thanks for joining us on our relaunch, we now have 1,000 active users!'
            }
        
        
        return render(request, 'gb_app/templates/index.html', context)
    
    @method_decorator(login_required)
    def user_defaults(self,request):
        '''fetch the details depending on the query passed in'''

        
        cu = UserHelper(request)
    
        if request.method == 'POST':
          
            if not cu.is_valid_req():
                return getres().res('401')
            
            #if req is valid set/get the serialized user
            cu.get_user()
            if cu.setupchecks():
                return getres().res('200', new_msg=cu.serialized)
    
        return getres().res('403')
    
    @method_decorator(login_required)
    def setup_steps(self, request):
        '''return the data for the specific setup step'''
        
        cu = UserHelper(request)
        
        
        if request.method == 'POST':
            
            if not cu.is_valid_req():
                return getres().res('401')
            
            #fetch the user email verification
            if cu.get_setupdata():
                return getres().res('200', new_msg=cu.setup_data)
        
        
        return getres().res('403')
    
    def all_memberships(self, request):
        '''return all memberships on get and save memberships on post'''
        
        if request.method == 'POST':
            return getres().res('200')
        
        return getres().res('200')
    
    def logout_view(self, request):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        
        return redirect(reverse('index', host='www'))