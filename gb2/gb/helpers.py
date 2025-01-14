#django imports
from django.contrib.auth import authenticate, login, logout 


#app imports 
from gb_api import serializers, helpers
from .forms import LoginForm 





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
