from django import forms
from gb_api.models import gbUser


class LoginForm(forms.Form):
    '''login form for validation'''
    
    uname = forms.CharField(min_length='4',max_length='255', label='uname')
    pwd = forms.CharField(min_length='4',max_length='255',  label='pwd')

class SignupForm(forms.Form):
    '''signup form for validation'''
    
    email = forms.EmailField(max_length='254', label='email')
    uname = forms.CharField(min_length='4',max_length='255',label='uname')
    pwd = forms.CharField(min_length='4',max_length='255',  label='pwd')
    rpwd = forms.CharField(min_length='4',max_length='255',  label='rpwd')
    tos = forms.BooleanField(label='tos')
    
