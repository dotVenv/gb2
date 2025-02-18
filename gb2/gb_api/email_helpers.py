#django imports
from django.conf import settings
import django.core.exceptions as dce
from django.utils import timezone

#other imports
from mail_templated import send_mail, EmailMessage
from gb_api.models import EmailVerification
import datetime
import random

class EmailHelper():
    '''email helper for sending emails for different occasions'''
    
    def __init__(self):
        '''initialize the EmailHelper Class'''

        self.email_host = None
        self.email_fernet = settings.EMAIL_KEYER
        self.templates = {
            'verify_account': 'gb_api/templates/emails/verify_account.html',
            'account_verified': 'gb_api/templates/emails/account_verified.html'
        }
        self.email_data = {
            'recipient': None,
            'username': None,
            'subject': None,
            'link': None,
            'html_alt': None,
        }
        
    
    def __generate_email_code(self):
        '''generate a 4 digit code to send to the user'''
        
        new_code = random.randint(1111,9999)
        return new_code

    
    def verify_account(self, test=False, request=None, newsignup=False):
        '''send the verify account email to the user'''
        
        self.email_data['subject'] = 'Gamers-Bounty - Verify your account!'
        
        email_data = None
        if not test:
            check_email = None
            if newsignup is False:
                check_email = EmailVerification.objects.filter(user_id=request.user.id)
            try:
                if check_email.exists():
                    self.email_data['verification_code'] = self.__generate_email_code()
                    tnow = timezone.now()
                    self.temp_time  = datetime.datetime.strftime(tnow  + datetime.timedelta(minutes=10),'%Y-%m-%d %H:%M:%S:%Z').replace(':UTC', ' UTC')
                    check_email.update(code=self.email_data['verification_code'], created_at=tnow, attempts=0, expired=False)
                    
                else:
                    self.email_data['verification_code'] = self.__generate_email_code()
                    email_data = EmailVerification.objects.create(user_id=request.user.id, code=self.email_data['verification_code'])
                    if email_data:
                        email_data.save()
            except AttributeError:
                self.email_data['verification_code'] = self.__generate_email_code()
                email_data = EmailVerification.objects.create(user_id=request.id, code=self.email_data['verification_code'])
                if email_data:
                    email_data.save()
              
              
        else:
            self.email_data['verification_code'] = self.__generate_email_code()
        
        #new_email = send_mail(self.templates['verify_account'], self.email_data, self.email_host,[self.email_data['recipient']])
        new_email = True 
        if new_email:
            return True
        return False    