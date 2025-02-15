from django.db import models
from django.contrib.auth.models import AbstractUser
from django_prometheus.models import ExportModelOperationsMixin
from django.core.serializers.json import DjangoJSONEncoder
from django_s3_storage.storage import S3Storage
from django.conf import settings 
from django.utils import timezone
import uuid
import datetime
import json


profilepic_storage = S3Storage(aws_s3_bucket_name='gbprofilepics')
tournament_thumbnail_storage = S3Storage(aws_s3_bucket_name='gbthumbnails')
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
    followers = models.ManyToManyField('AccountPreference', related_name='user_followers')
    following = models.ManyToManyField('AccountPreference', related_name='user_following')
    entries = models.ManyToManyField('Tournament', blank=True, related_name='entered_tournament')
    uname_change_token = models.IntegerField(default=0)
    
    class Meta:
        verbose_name_plural = 'Account Preferences'
        
    def __str__(self):
        return f'{self.user}'
    

platform_choices = [
    ('Xbox', 'Xbox'),
    ('PSN', 'PSN'),
    ('PC', 'PC'),

]

class Platform(ExportModelOperationsMixin('Platform'),models.Model):
    '''store the platform option for avilable on the site'''
    
    name = models.CharField(max_length=25, choices=platform_choices) 
    
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
    return [{"Disconnection":"If a player disconnects, click the 'Opponent Disconnected' button. This will allow a 2 minute window for the opponent to re-establish connection and confirm it as well. This can only be done once per match."}
]


def set_dates(sore):
    '''set the start date automatically for the current tournament'''
    
    match sore:
        case 'start':
            today = datetime.datetime.today().date()
            desired_time = datetime.time(18,00)
            new_date = datetime.datetime.combine(today, desired_time)
            return new_date
        case 'end':
            today = timezone.datetime.today().date()
            desired_time = datetime.time(21,00)
            new_date = datetime.datetime.combine(today, desired_time, tzinfo=timezone.now().tzinfo)
            return new_date
 
aws_thumbnail_url = 'https://gbthumbnails.s3.us-east-2.amazonaws.com'
thumbnail_options = [
    ('NBA2K_STRICT',f'{aws_thumbnail_url}/nba2k_restricted.png'),
    ('NBA2K_UNSTRICT',f'{aws_thumbnail_url}/nba2k_unrestricted.png'),
    
    ('MADDEN_STRICT', f'{aws_thumbnail_url}/madden_restricted.png'),
    ('MADDEN_UNSTRICT', f'{aws_thumbnail_url}/madden_unrestricted.png'),
    
    ('MARVEL_STRICT', f'{aws_thumbnail_url}/marvels_restricted.png'),
    ('MARVEL_UNSTRICT', f'{aws_thumbnail_url}/marvels_unrestricted.png'),
]


def gen_uuid():
    '''generate a new uuid'''
    return str(uuid.uuid4())

def prev_hashes():
    '''default list for storing old hashes'''
    return {'hashes':[]}


class UUIDEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, uuid.UUID):
            return str(obj)
        return super().default(obj)
    
class Tournament(ExportModelOperationsMixin('Tournament'),models.Model):
    '''store each tournament to return its data properly'''
    
    name = models.CharField(max_length=15, blank=True, null=True, choices=game_options)
    mode = models.CharField(max_length=15,  blank=True, null=True, choices=mode_options)
    
    specific = models.CharField(max_length=25, blank=True, null=True)
    desc = models.TextField()
    start = models.DateTimeField(auto_now_add=False, default=set_dates('start'))
    end = models.DateTimeField(auto_now_add=False, default=set_dates('end'))
    rules = models.JSONField(default=rules)
    pool = models.DecimalField(default=0.0, decimal_places=2, max_digits=7)
    placement = models.DecimalField(default=10.0, decimal_places=2, max_digits=7)
    register_limit = models.IntegerField(default=75)
    thumbnail = models.CharField(max_length=255, choices=thumbnail_options, blank=True, null=True)
    platforms = models.ManyToManyField('Platform',related_name='platform_option', blank=True)
    tournament_hash = models.CharField(max_length=255, default=gen_uuid, unique=True)
    last_displacement = models.DecimalField(default=33.0, max_digits=7, decimal_places=2)
    hosted_by = models.CharField(max_length=255, default='Gamers-Bounty')
    rating = models.IntegerField(default=0)
    previous_hashes = models.JSONField(default=prev_hashes, blank=True, null=True)
    
    def swap_uuid(self):
        for v in self.previous_hashes.values():
            v.append(self.tournament_hash)
        new_uuid = uuid.uuid4()
        self.tournament_hash = str(uuid.uuid4())
        self.save()
    
    def update_dates(self):
        self.start = set_dates('start')
        self.end = set_dates('end')
        self.save()
        
    class Meta:
        verbose_name_plural = 'Tournaments'
        
    def __str__(self):
        return f'{self.name} {self.specific}'


    
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
    

class Match(ExportModelOperationsMixin('Match'), models.Model):
    '''store each match played'''
    
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    players = models.ManyToManyField('AccountPreference', related_name='opponents')
    winner = models.ForeignKey('AccountPreference', on_delete=models.CASCADE, related_name='match_winner')
    winner_points_earned = models.IntegerField(default=55)
    winner_rank_points_earned = models.IntegerField(default=2.5)
    loser_points_earned = models.IntegerField(default=8)
    loser_rank_points_loss = models.IntegerField(default=-2)
    score = models.CharField(max_length=25, blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    tournament = models.ForeignKey('Tournament', on_delete=models.PROTECT, related_name='current_tournament', blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Matches'
        
    def __str__(self):
        return f'{self.winner} : {self.winner_points_earned}'
    

    
rank_options = [
    ('Low Tier 1', 'Low Tier 1'),
    ('Low Tier 2', 'Low Tier 2'),
    ('Low Tier 3', 'Low Tier 3'),
    ('Mid Tier 1', 'Mid Tier 1'),
    ('Mid Tier 2', 'Mid Tier 2'),
    ('Mid Tier 3', 'Mid Tier 3'),
    ('High Tier 1', 'High Tier 1'),
    ('High Tier 2', 'High Tier 2'),
    ('High Tier 3', 'High Tier 3'),
    ('Bounty Hunter', 'Bounty Hunter'),

]

def prev_seasons():
    '''store previous season ranks for the current user'''
    return {}

class PlayerStat(ExportModelOperationsMixin('PlayerStat'), models.Model):
    '''store player statistics'''
    
    user = models.ForeignKey('AccountPreference', on_delete=models.CASCADE, related_name='player')
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    fav_tournament = models.CharField(max_length=150, blank=True, null=True)
    fav_platform = models.CharField(max_length=25, blank=True, null=True)
    matches = models.ManyToManyField('Match', related_name='all_matches', blank=True)
    rank_points = models.IntegerField(default=0) 
    csr = models.CharField(max_length=75, default='Low Tier 1', choices=rank_options)
    previous_seasons = models.JSONField(default=prev_seasons)
    
    
    def update_season(self, current_season):
        '''a new season reset'''
        self.previous_season[current_season] = {'wins': self.wins, 'losses': self.losses, 'matches': self.matches.count(), 'rank_points': self.rank_points, 'rank': self.current_season_rank}
        self.wins = 0
        self.losses = 0
        self.matches.clear()
        #full rank reset
        match self.csr:
            case 'Low Tier 3':
                self.csr = 'Low Tier 1'
            case 'Low Tier 2':
                self.csr = 'Low Tier 1'
            case 'Low Tier 1':
                self.csr = 'Low Tier 1'
            case 'Mid Tier 3':
                self.csr = 'Low Tier 1'
            case 'Mid Tier 2':
                self.csr = 'Low Tier 2'
            case 'Mid Tier 1':
                self.csr = 'Mid Tier 3'
            case 'High Tier 3':
                self.csr = 'Mid Tier 1'
            case 'High Tier 2': 
                self.csr = 'Mid Tier 2'
            case 'High Tier 1':
                self.csr = 'High Tier 3'
            case 'Bounty-Hunter':
                self.csr = 'High Tier 3'
        
        self.rank_points = 0       
        self.save()
        
        
    class Meta:
        verbose_name_plural = 'Player Stats'
        
    def __str__(self):
        return f'{self.user.user.username} : {self.wins}-{self.losses}'    


matchmaking_options = [
    ('idle', 'idle'),
    ('connecting', 'connecting'),
    ('matchmaking', 'matchmaking'),
    ('connected', 'connected'),
    ('disconnected', 'disconnected')
]

class Leaderboard(ExportModelOperationsMixin('Leaderboard'), models.Model):
    '''store the leaderboard for each uuid the tournament generates so they can later be archived'''
    
    tournament = models.ForeignKey('Tournament', to_field='tournament_hash', on_delete=models.PROTECT,  related_name='current_tournament_hash', blank=True)
    player = models.ForeignKey('PlayerStat', on_delete=models.PROTECT, related_name='current_tournament_player', blank=True, null=True)
    is_active = models.BooleanField(default=True)
    points = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)
    previous_opponent = models.ForeignKey('PlayerStat', on_delete=models.PROTECT, related_name='prev_opponent', blank=True, null=True)
    matchmaking = models.CharField(max_length=35, choices=matchmaking_options, null=True, blank=True)
    
 
    class Meta:
        verbose_name_plural = 'Leaderboards'
        
    def __str__(self):
        return f'{self.tournament.name}({self.tournament.specific}) {self.player.user.user.username} leaderboard'
    

class TournamentLike(ExportModelOperationsMixin('TournamentLike'), models.Model):
    '''store which users like which tournaments'''
    
    user = models.ForeignKey('gbUser', on_delete=models.CASCADE, related_name='tournament_liker')
    tournament = models.ForeignKey('Tournament', to_field='tournament_hash', on_delete=models.CASCADE, related_name='specific_tournament')
    status = models.BooleanField(default=False)
    
    
    class Meta:
        verbose_name_plural = 'Tournament Likes'
        
    def __str__(self):
        return f'{self.user.username} likes {self.tournament.name} '





"""current_season_rank = models.CharField(max_length=75, choices=rank_options, blank=True, null=True)
    
    def update_season(self, current_season):
        '''a new season reset'''
        self.previous_season[current_season] = {'wins': self.wins, 'losses': self.losses, 'matches': self.matches.count(), 'rank_points': self.rank_points, 'rank': self.current_season_rank}
        self.wins = 0
        self.losses = 0
        self.matches.clear()
        self.current_season_rank = 'Low Tier 1'
        #full rank reset
        match self.current_season_rank:
            case 'Low Tier 3':
                self.current_season_rank = 'Low Tier 1'
            case 'Low Tier 2':
                self.current_season_rank = 'Low Tier 1'
            case 'Low Tier 1':
                self.current_season_rank = 'Low Tier 1'
            case 'Mid Tier 3':
                self.current_season_rank = 'Low Tier 1'
            case 'Mid Tier 2':
                self.current_season_rank = 'Low Tier 2'
            case 'Mid Tier 1':
                self.current_season_rank = 'Mid Tier 3'
            case 'High Tier 3':
                self.current_season_rank = 'Mid Tier 1'
            case 'High Tier 2': 
                self.current_season_rank = 'Mid Tier 2'
            case 'High Tier 1':
                self.current_season_rank = 'High Tier 3'
            case 'Bounty-Hunter':
                self.current_season_rank = 'High Tier 3'
        
        self.rank_points = 0       
        self.save()   """