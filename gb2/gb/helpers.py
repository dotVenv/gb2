#django imports
from django.contrib.auth import authenticate, login, logout 
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse

#app imports 
from gb_api import serializers, helpers
from .forms import LoginForm 


#global variables
ENCODER  = DjangoJSONEncoder


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
                return JsonResponse(status=401, encoder=ENCODER, data={'message': 'Unauthorized'})
            
            data = {'uname': self.username, 'pwd': self.pwd}
            
            #check if form is valid
            validate_login = LoginForm(data)
            
            if validate_login.is_valid():
                self.username = validate_login.cleaned_data['uname']
                self.pwd = validate_login.cleaned_data['pwd']
                user_auth = authenticate(self.request, username=self.username, password=self.pwd)
                if user_auth is not None:
                    login(self.request, user_auth)
                    print('logged in')
                    return JsonResponse(status=200, encoder=ENCODER, data={'message': 'Successful'})
       
        return JsonResponse(status=401, encoder=ENCODER, data={'message': 'Unauthorized'})
