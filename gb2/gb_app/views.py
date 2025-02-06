#djano imports
from django.shortcuts import render,redirect
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.auth import  logout 
from django.contrib.auth.mixins import LoginRequiredMixin
import django.core.exceptions as dce

# Create your views here.
from .user_helpers import *
from gb.response_helpers import Response_Helpers as getres
from django_hosts.resolvers import reverse 
from gb_api.models import Membership, Announc
from .ticket_helper import SupportTicketer

from cryptography.fernet import Fernet
        
class APPViews(TemplateView):
   
    
    @method_decorator(login_required) 
    def dashboard(self, request):
        '''return the dashboard view for the user'''


        context = {}
        context['announcment'] = "No announcment"
        try:
           
            latest_announcment = Announc.objects.filter(active=True).order_by('id')[:0]
           
            if latest_announcment.exists():
                for val in latest_announcment.values(): context['announcment'] = val

                    
        except dce.ObjectDoesNotExist:
            context['announcment'] = "No announcment"
            pass
        
        return render(request, 'gb_app/templates/index.html', context)
    
    @method_decorator(login_required)
    def myprofile(self, request):
        '''return the myprofile view for the user'''
        
        cu  = UserHelper(request)
        
        if request.method == 'POST':
            
            if not cu.is_valid_req():
                return getres().res('401', new_msg={'status': str('failed')})
            
            match request.POST.get('poststep'):
                case 'update_account':
                    if cu.update_account():
                        return getres().res('200', new_msg={'status': str('successful')})
                
                case 'verify_email':
                    aec = cu.attempt_email_change() 
                    if aec is True:
                        return getres().res('200', new_msg={'status': str('successful'), 'temp_time': cu.temp_time})
                    elif aec == 'exists':
                        return getres().res('401', new_msg={'status': str(aec), 'msg': 'Email already exists.'})
                    
                case 'uname_change_req':
                    
                    ticketer = SupportTicketer(request).create_ticket(sev='medium', topic='username change request')
                    if ticketer:
                        return getres().res('200', new_msg={'status': 'successful'})
                
                case 'user_tickets':
                   ticketer = SupportTicketer(request).get_tickets()
                   if ticketer:
                        return getres().res('200', new_msg={'status': 'successful', 'ticket': ticketer.tickets})
            return getres().res('401', new_msg={'status': str('failed')})
        
        
        
        context = {}
        
        return render(request, 'gb_app/templates/index.html', context=context)
    
    
    
    @method_decorator(login_required)
    def user_defaults(self,request):
        '''fetch the details depending on the query passed in'''

        
        cu = UserHelper(request)
    
        if request.method == 'POST':
          
            if not cu.is_valid_req():
                return getres().res('401')
            
            #if req is valid set/get the serialized user
            
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
    
    @method_decorator(login_required)
    def all_memberships(self, request):
        '''return all memberships on get and save memberships on post'''
        
        if request.method == 'POST':
            return getres().res('200')
    
        
        #onGET
        mem_data = [] #membership data
    
        for value in Membership.objects.all():
            mem_data.append({
                'id': value.id,
                'name': value.name,
                'price': value.price,
                'details': value.desc
            })
            
        return getres().res('200', new_msg=mem_data)
    
    def logout_view(self, request):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        
        return redirect(reverse('index', host='www'))