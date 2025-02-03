#django imports
from django.conf import settings
import django.core.exceptions as dce
from django.utils import timezone

#other imports
from mail_templated import send_mail, EmailMessage
from gb_api.models import EmailVerification
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
        print(new_code)
        return new_code

    
    def verify_account(self, test=False, request=None):
        '''send the verify account email to the user'''
        
        self.email_data['subject'] = 'Gamers-Bounty - Verify your account!'
        
        email_data = None
        if not test:
            check_email = EmailVerification.objects.filter(user=request.user.id)
            if check_email.exists():
                self.email_data['verification_code'] = self.__generate_email_code()
                check_email.update(code=self.email_data['verification_code'], created_at=timezone.now(), attempts=0, expired=False)
              
        
            else:
                try:
                    self.email_data['verification_code'] = self.__generate_email_code()
                    email_data = EmailVerification.objects.create(user=request.user.id, code=self.email_data['verification_code'])
                    if email_data:
                        email_data.save()
                except dce.RequestAborted:
                    return 
        else:
            self.email_data['verification_code'] = self.__generate_email_code()
        
        new_email = send_mail(self.templates['verify_account'], self.email_data, self.email_host,[self.email_data['recipient']])
    
        if new_email:
            return True
        return False    