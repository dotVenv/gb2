from gb_api import serializers, helpers

from django.contrib.auth import authenticate, login, logout 


class Current_Session():
    '''class to handle the inital current session pre login'''
    
    def __init__(self, request, username=None, password=None, cookie=None):
        '''initialize the class parameters'''
            
        self.request = request
        self.username = username
        self.password = password
        self.cookie = cookie
    
    
        
    def login(self):
        '''login the current user'''
        
        
        if self.request.method == 'POST':
            print('ready to validate login.')
        
        return