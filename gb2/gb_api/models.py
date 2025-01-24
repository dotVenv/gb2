from django.db import models
from django.contrib.auth.models import AbstractUser
from django_prometheus.models import ExportModelOperationsMixin


# Create your models here.
class gbUser(ExportModelOperationsMixin('gbUser'), AbstractUser):
    '''db table for users'''
    profile_pic = models.ImageField(default='profile_pics/default.png', blank=True, null=True, upload_to='profile_pics/')
    mfa_active = models.BooleanField(default=False)
    ip_address = models.CharField(max_length=255, blank=True, null=True)
    account_verified = models.BooleanField(default=False)
    is_locked = models.BooleanField(default=False)
    is_banned = models.BooleanField(default=False)
    
    pass


class Oauth(ExportModelOperationsMixin('Oauth'), models.Model):
    '''db table for oauth client data'''
    
    client_id = models.CharField(max_length=255, blank=True, null=True)
    client_secret = models.CharField(max_length=255, blank=True, null=True)
    app = models.CharField(max_length=255, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Oauths'
    
    def __str__(self):
        return f'{self.app} oauth'
    
    
    
class ContactRequest(ExportModelOperationsMixin('ContactRequest'), models.Model):
    '''db table for holding each contact us filled and submitted'''
    
    fname = models.CharField(max_length=255, blank=True, null=True)
    lname = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255)
    message = models.TextField()
    status = models.CharField(max_length=15, default='unreplied',)
    
    
    class Meta:
        verbose_name_plural = 'Contact Requests'
        
    def __str__(self):
        return f'{self.email} - {self.status}'
    

class EmailVerification(ExportModelOperationsMixin('EmailVerification'),models.Model):
    '''store temp codes for email verifications with expiration'''
    
    user = models.ForeignKey(gbUser, on_delete=models.CASCADE ,related_name='recipient')
    code = models.CharField(max_length=255,blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    expired = models.BooleanField(default=False)
    attempts = models.IntegerField(default=0)
    
    class Meta:
        verbose_name_plural = 'Email Verifications'
        
    
    def __str__(self):
        return f'{self.user}, Expired:{self.expired}'
    
