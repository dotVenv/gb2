#reponse helpers
from django.core.serializers.json import DjangoJSONEncoder
from django.http import JsonResponse




#global variables
ENCODER  = DjangoJSONEncoder

class Response_Helpers():
    
    def __init__(self):
        self.codes = {
            '200': 'Successful',
            '401': 'Unauthorized',
            '403': 'Forbidden',
            '404': 'Not Found',
            '500': 'Server Error'
            
        }
        
    def res(self, err_code, new_msg=None):
        '''return the json response based on the desired code'''
        msg = self.codes[err_code]
        if new_msg:
            msg = new_msg
        return JsonResponse(status=int(err_code), encoder=ENCODER, data={'message': msg})