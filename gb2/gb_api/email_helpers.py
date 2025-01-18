


class EmailHelper():
    '''email helper for sending emails for different occasions'''
    
    def __init__(self, request):
        '''initialize the EmailHelper Class'''
        
        self.request = request
        
    
    def verify_account(self):
        '''send the verify account email to the user'''
        
        
        return