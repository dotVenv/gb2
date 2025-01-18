#django imports

import django.core.exceptions as dce
from requests_oauthlib import OAuth2Session

#app imports
from gb_api.models import Oauth


class OAuth_Connection():
    
    def __init__(self, request):
        ''' authentication helper init'''
        self.request = request
        self.load_check = None
        self.app = None
        self.redirect_uri = None
        self.scope = []
        
    def load_client(self):
        '''get the client data for the selected app'''
        
        try:
            self.client = Oauth.objects.get(app=self.app)
            if not self.client:
                return False
           
        except dce.ObjectDoesNotExist:
            return False
        except dce.RequestAborted:
            return false
        
    def session_store(self):
        'store url and state in user session'
        
        oauth_type = f'{self.app}_oauth'
        try:
            #del any older sessions
            if self.request.session[oauth_type]:
                del self.request.session[oauth_type]
        except KeyError:
            pass
        
        match self.app:
            case 'google':
                self.request.session[oauth_type] = [self.authorization_url, self.state]
                
            
        if not self.request.session[oauth_type]:
            self.load_check = 'failed'
        
        
class Google_Auth(OAuth_Connection):
    '''init google auth helper class'''
    
    def __init__(self, request):
        '''google auth helper init'''
        
        #inherit all methods and properties
        super().__init__(request)
        self.app = 'google'
        self.load_client()
        self.scope = ["openid",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"]
        self.redirect_uri = 'http://gamers-bounty-dev.com:8000/oauth/google/callback'
        self.token_uri = 'https://www.googleapis.com/oauth2/v4/token'
        self.auth_url = 'https://www.accounts.google.com/o/oauth2/v2/auth'
    
    
    def init_auth(self):
        '''fetch token for the google oauth'''
        
        oauth_google = OAuth2Session(self.client.client_id, redirect_uri=self.redirect_uri, scope=self.scope)
    
        self.authorization_url, self.state =  oauth_google.authorization_url(
            self.auth_url, access_type="offline", prompt="select_account"
        )
        if not self.authorization_url or not self.state:
            self.load_check = 'failed'
        
        #store url and state in user session
        if not self.load_check == 'failed':
            self.session_store()
        
        
   
    def fetch_data(self):
        return None
        
    

    
    
    
        
        
    
    
    