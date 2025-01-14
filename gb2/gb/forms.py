from django import forms

class LoginForm(forms.Form):
    '''login form for validation'''
    
    uname = forms.CharField(max_length='255', label='uname')
    pwd = forms.CharField(max_length='255',  label='pwd')
