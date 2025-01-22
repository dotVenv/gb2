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



        
class APPViews(TemplateView):
   
    
    @method_decorator(login_required) 
    def dashboard(self, request):
        '''return the dashboard view for the user'''
    
        context = {}
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
        
    
    def logout_view(self, request):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        
        return redirect(reverse('index', host='www'))