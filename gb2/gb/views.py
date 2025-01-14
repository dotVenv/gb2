#djano imports
from django.shortcuts import render
from django.views.generic import TemplateView
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse

#app imports 
from . import helpers as hlp 

# Create your views here.
class UIViews(TemplateView):
    
    def index(self, request):
        
        context = {}
        print(f'auth status:{request.user.is_authenticated} -  anon status: {request.user.is_anonymous}')
        
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
    
    def login(self, request):
        '''login function for the user'''
        
        #call helper login function
        login_user = hlp.Current_Session(request=request).login()
        print(login_user)
        request  = login_user[1]
        return login_user[0]