


class UserHelper():
    '''define a user helper to handle actions for the users profile'''
    
    def __init__(self, request):
        
        self.request = request
    
    
    def runchecks(self):
        '''run checks if a check is invalid/false return will be empty/none'''
        
        self.check_verified_status()
        
    def check_verified_status(self):
        '''check if the users email is currently verified'''    
        return
    