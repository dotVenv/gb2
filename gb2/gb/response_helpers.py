#reponse helpers


class Response_Helpers():
    
    def __init__(self):
        self.codes = {
            '200': 'OK',
            '401': 'Unauthorized',
            '403': 'Forbidden',
            '404': 'Not Found',
            '500': 'Server Error'
            
        }
        
    def get_code(self, err_code):
        '''return the json response based on the desired code'''
        
        
        return 