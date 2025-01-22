#django imports
from django.conf import settings

#other imports
from mail_templated import send_mail, EmailMessage


class EmailHelper():
    '''email helper for sending emails for different occasions'''
    
    def __init__(self):
        '''initialize the EmailHelper Class'''

        self.email_host = None
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
        
    
    def send_verification_code(self):
        '''resend a valid verification code to the user'''
        
        return
    
    
    def verify_account(self):
        '''send the verify account email to the user'''
        
        self.email_data['subject'] = 'Gamers-Bounty - Verify your account!'
        self.email_data['verification_code'] = 313234
        
        new_email = send_mail(self.templates['verify_account'], self.email_data, self.email_host,[self.email_data['recipient']])
    
        
        return