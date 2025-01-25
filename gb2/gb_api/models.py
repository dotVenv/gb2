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
    age_consent = models.BooleanField(default=False)
    state = models.CharField(max_length=75, blank=True, null=True)
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
    



def membership_desc():
    '''default membership desc'''
    return dict

membership_options = [
    ("free", "free"),
    ("7day", "7day"),
    ("monthly", "monthly"),
]

class Membership(models.Model):
    '''store the membership data for each user'''
    
    name = models.CharField(choices=membership_options, max_length=20, default='free')
    desc = models.JSONField(default=membership_desc())
    price = models.DecimalField(default=0.0, decimal_places=2, max_digits=7)
    created_at = models.DateTimeField(auto_now_add=True)
    subscribers = models.ManyToManyField(gbUser, related_name='membership_subscriber')
    
    class Meta:
        verbose_name_plural = 'Memberships'
        
    def __str__(self):
        return f'{self.name} - {self.price}'


server_options = [
    ('US0-Chicago', 'US0-Chicago'),
    ('US0-NewJersey', 'US0-NewJersey'),
    ('US0-LosAngeles', 'US0-LosAngeles')
]

console_options = [
    ('Xbox', 'Xbox'),
    ('PS4', 'PS4'),
    ('PC', 'PC')
]
class AccountPreference(models.Model):
    '''store account preferences for the user'''
    user = models.ForeignKey(gbUser, on_delete=models.CASCADE, related_name='user_pref')
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE, related_name='user_membership', null=True, blank=True)
    server = models.CharField(choices=server_options, max_length=50, blank=True, null=True)
    console = models.CharField(choices=console_options, max_length=10, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Account Preferences'
        
    def __str__(self):
        return f'{self.user} preferences'
    
