from django.test import TestCase, Client

from gb_api.models import *
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
        
        
        