from django.db import models
from django.contrib.auth.models import AbstractUser
from django_prometheus.models import ExportModelOperationsMixin
from django_s3_storage.storage import S3Storage
from django.conf import settings 

profilepic_storage = S3Storage(aws_s3_bucket_name='gbprofilepics')


# Create your models here.
class gbUser(ExportModelOperationsMixin('gbUser'), AbstractUser):
    '''db table for users'''
    
    profile_pic = models.ImageField(default='default.png', blank=True, null=True, storage=profilepic_storage)
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
    return list

membership_options = [
    ("free", "free"),
    ("7day", "7day"),
    ("monthly", "monthly"),
]

class Membership(ExportModelOperationsMixin('Membership'),models.Model):
    '''store the membership data for each user'''
    
    name = models.CharField(choices=membership_options, max_length=20, default='free')
    desc = models.JSONField(default=membership_desc())
    price = models.DecimalField(default=0.0, decimal_places=2, max_digits=7)
    created_at = models.DateTimeField(auto_now_add=True)
    subscribers = models.ManyToManyField(gbUser, related_name='membership_subscriber', blank=True)
    
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
    ('PSN', 'PSN'),
    ('PC', 'PC')
]

class AccountPreference(ExportModelOperationsMixin('AccountPreference'),models.Model):
    '''store account preferences for the user'''
    user = models.ForeignKey(gbUser, on_delete=models.CASCADE, related_name='user_pref')
    membership = models.ForeignKey(Membership, on_delete=models.CASCADE, related_name='user_membership', null=True, blank=True)
    server = models.CharField(choices=server_options, max_length=50, blank=True, null=True)
    platform = models.ForeignKey('Platform', null=True, blank=True, on_delete=models.CASCADE, related_name='user_platform')
    wallet = models.ForeignKey('Wallet', blank=True, null=True, on_delete=models.CASCADE, related_name='user_wallet')
    fl = models.ManyToManyField('AccountPreference', related_name='friends_list')
    entries = models.IntegerField(default=0)
    uname_change_token = models.IntegerField(default=0)
    
    class Meta:
        verbose_name_plural = 'Account Preferences'
        
    def __str__(self):
        return f'{self.user} preferences'
    

platform_choices = [
    ('Xbox', 'Xbox'),
    ('PSN', 'PSN'),
    ('PC', 'PC'),
]

class Platform(ExportModelOperationsMixin('Platform'),models.Model):
    '''store the platform option for avilable on the site'''
    
    name = models.CharField(max_length=15, choices=platform_choices)
    tournaments = models.ManyToManyField('Tournament', related_name='platform_tournaments')
    
    
    class Meta:
        verbose_name_plural = 'Platforms'
        
        
    def __str__(self):
        return f'{self.name}'


game_options = [
    ('rivals', 'rivals'),
    ('nba2k', 'nba2k'),
    ('madden', 'madden'),
    ('fortnite', 'fortnite'),
    ('cod', 'cod')
]

mode_options = [
    ('tourney', 'tourney'),
    ('elim', 'elim'),
    ('speedrun', 'speedrun')
]

def rules():
    '''return a default list for each tournament'''
    return []

class Tournament(ExportModelOperationsMixin('Tournament'),models.Model):
    '''store each tournament to return its data properly'''
    
    name = models.CharField(max_length=15, blank=True, null=True, choices=game_options)
    mode = models.CharField(max_length=15,  blank=True, null=True, choices=mode_options)
    specific = models.CharField(max_length=25, blank=True, null=True)
    desc = models.TextField()
    date = models.DateTimeField(auto_now_add=False)
    rules = models.JSONField(default=rules)
    pool = models.DecimalField(default=0.0, decimal_places=2, max_digits=7)
    placement = models.DecimalField(default=0.0, decimal_places=2, max_digits=7)
    registered = models.ManyToManyField('AccountPreference', related_name='registered_users')
    register_limit = models.IntegerField(default=75)
    thumbnail = models.ImageField(blank=True, null=True, upload_to='thumbnails/tournaments/')
    rating = models.IntegerField(default=0)
    
    
    class Meta:
        verbose_name_plural = 'Tournaments'
        
    def __str__(self):
        return f'{self.name}'
    
    
class Transaction(ExportModelOperationsMixin('Transaction'),models.Model):
    ''''store each transaction for stripe/balance accuracy'''
    
        
    hash = models.CharField(max_length=255, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=False)
    desc = models.CharField(max_length=255, blank=True, null=True)
    amount = models.DecimalField(default=0.00, decimal_places=2, max_digits=7)
    action = models.CharField(max_length=255, blank=True, null=True)
    status = models.CharField(max_length=100, blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Transactions'
        
        
    def __str__(self):
        
        return f'{self.amount} : {self.hash}'
    
    
def stripe_user():
    '''return a dict for the stripe user'''
    return {'id': None, 'hash': None}

def crypto_user():
    '''return a dict for the crypto user'''
    return {'id': None, 'hash': None, }

class Wallet(ExportModelOperationsMixin('Wallet'),models.Model):
    '''store each wallet for the user'''
    
    strip_data = models.JSONField(default=stripe_user)
    crypto_data = models.JSONField(default=crypto_user)
    balance = models.DecimalField(default=0.00, decimal_places=2, max_digits=7)
    is_active = models.BooleanField(default=True)
    transactions = models.ManyToManyField('Transaction', related_name='wallet_transactions')

    class Meta: 
        verbose_name_plural = 'Wallets'
        
    def __str__(self):
        
        return f'{self.balance} - Active ({self.is_active})'
        
    
    
class Announc(ExportModelOperationsMixin('Announc'),models.Model):
    '''store a new announcment sitewide'''
    
    title = models.CharField(max_length=255, null=True, blank=True)
    created_by = models.ForeignKey('gbUser', on_delete=models.PROTECT, related_name='announcer')
    created_at = models.DateTimeField(auto_now_add=True)
    desc = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=False)
    
    class Meta:
        verbose_name_plural = 'Announcments'
    
    def __str__(self):
        return f'{self.title} - {self.created_by.username}'
    
    
    
    
ticket_severity_options = [
    ('low', 'low'),
    ('medium', 'medium'),
    ('high', 'high'),
    ('critical', 'critical')
]

ticket_status_options = [
    ('answered', 'answered'),
    ('pending', 'pending'),
    ('closed', 'closed'),
    ('open', 'open')
]

class SupportTicket(ExportModelOperationsMixin('SupportTicket'), models.Model):
    '''store support tickets for users in the db'''
    
    user = models.ForeignKey('gbUser', on_delete=models.PROTECT, related_name='ticket_owner')
    severity = models.CharField(choices=ticket_severity_options, max_length=25)
    topic = models.CharField(max_length=255, blank=True)
    status = models.CharField(choices=ticket_status_options, max_length=25, default='open')
    answer = models.TextField(blank=True, null=True)
    assigned_to = models.ForeignKey('gbUser', on_delete=models.PROTECT, related_name='ticket_staff', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    closed_at = models.DateTimeField(auto_now_add=True, blank=True)
    
    class Meta:
        verbose_name_plural = 'Support Tickets'
        
    def __str__(self):
        return f'{self.user.email} : {self.severity} - {self.status}'
    


class MFA_Rotator(ExportModelOperationsMixin('MFA_Rotator'), models.Model):
    '''mfa/2fa rotator for users'''
    
    user = models.ForeignKey('gbUser', on_delete=models.CASCADE, related_name='mfa_user')
    attempts = models.IntegerField(default=0)
    status = models.IntegerField(default=0)
    locked = models.IntegerField(default=0)
    b32 = models.CharField(max_length=255, null=True, blank=True)
    bhex = models.CharField(max_length=255, null=True, blank=True)
    last_used = models.DateTimeField(blank=True, null=True, auto_now_add=False)
    
    
    class Meta:
        verbose_name_plural = 'Mfa Rotators'
    
    def __str__(self):
        return f'User:{self.user.username}'