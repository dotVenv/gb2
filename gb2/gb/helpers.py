#django imports
from django.contrib.auth import authenticate, login, logout 
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse

#app imports 
from gb_api import serializers, helpers


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
            print('ready to validate login.')
        return 

    def set_data(self, uname, pwd, cookie):
        '''validate the current data and set in class'''
        