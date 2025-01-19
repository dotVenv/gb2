from django.test import TestCase, Client
from django.core import mail 

from gb_api.models import *
from gb_api.email_helpers import * 
# Create your tests here.


class TestLoginCase(TestCase):
    '''test the login url which handles the request as well'''
    
    def setUp(self):
        gbUser.objects.create_user('demoUser', 'demo@demo.com', 'demoPass1!')
        
    def test_invalid_login(self):
        '''test an invalid login for a user that doesnt exist'''
        
        c = Client()
        res = c.post('/login', {'uname':'wins4L', 'pwd':'noLosses4L'})
        self.assertEqual(res.status_code, 401)
    
    def test_valid_login_1(self):
        '''test the login view for loggin in the user w credentials'''

        c = Client()
        res = c.post('/login', {'uname':'demoUser', 'pwd':'demoPass1!'})
        self.assertEqual(res.status_code, 200)
        
        
    def test_valid_login_2(self):
        '''test the django authentication method for logging in the user'''
        
        c = Client()
        res = c.login(username='demoUser', password='demoPass1!')
        self.assertEqual(res, True)
        
    def test_invalid_signup_email(self):
        '''test for duplicate email on signup and return 401 '''
        
        c = Client()
        res = c.post('/signup', {'email':'demo@demo.com', 'uname': 'demoUser1', 'pwd':'demoPass2!', 'rpwd':'demoPass2!', 'tos':True})
        self.assertEqual(res.status_code, 401)
    
    def test_invalid_signup_uname(self):
        '''test for duplicate username on signup and return 401'''
        
        c = Client()
        res = c.post('/signup', {'email':'demo1@demo1.com', 'uname': 'demoUser', 'pwd':'demoPass2!', 'rpwd':'demoPass2!', 'tos':True})
        self.assertEqual(res.status_code, 401)
    
    def test_valid_signup(self):
        '''test for valid signup when user submits form'''
        
        c = Client()
        res = c.post('/signup', {'email':'demo1@demo1.com', 'uname': 'demoUser1', 'pwd':'demoPass2!', 'rpwd':'demoPass2!', 'tos':True})
        self.assertEqual(res.status_code, 200)
        



class EmailTest(TestCase):
    '''email test case from django docs'''
    
    def test_send_email(self):
        new_email = EmailHelper()
        
        new_email.email_data['recipient'] = 'support@venv.pro'
        new_email.email_data['link'] = 'http://gamers-bounty-dev.com:8000'
        new_email.email_data['username'] = 'gdub'
        new_email.email_host = 'mail.example.com'
        new_email.verify_account()
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].from_email, new_email.email_host)
        self.assertEqual(mail.outbox[0].to, [new_email.email_data['recipient']])