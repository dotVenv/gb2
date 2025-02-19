#django imports
import django.core.exceptions as dce
from django.db import transaction
from django.utils.decorators import method_decorator
from django.conf import settings


#other imports
from gb_api.models import Tournament, Leaderboard, TournamentLike, AccountPreference, Match, PlayerStat

class TnHelper():
    '''a class for helping manage tournaments'''
    
    def __init__(self, request):
        self.request = request
    
        
        
    def get_tournaments(self, filter=None):
        '''get tournaments, if a filter is set, use the filter'''
        
        aws_thumbnail_url = 'https://gbthumbnails.s3.us-east-2.amazonaws.com'
        thumbnail_options = {
            'NBA2K_STRICT':f'{aws_thumbnail_url}/nba2k_restricted.png',
            'NBA2K_UNSTRICT':f'{aws_thumbnail_url}/nba2k_unrestricted.png',
            
            'MADDEN_STRICT': f'{aws_thumbnail_url}/madden_restricted.png',
            'MADDEN_UNSTRICT': f'{aws_thumbnail_url}/madden_unrestricted.png',
            
            'MARVEL_STRICT': f'{aws_thumbnail_url}/marvels_restricted.png',
            'MARVEL_UNSTRICT': f'{aws_thumbnail_url}/marvels_unrestricted.png',
        }
    
        self.tournaments_list = []
        tl = None
        if filter is None:
            filter = str(self.request.POST.get('filter'))
        if filter != 'entry': 
            tl = Tournament.objects.all().order_by(filter)
            if filter == 'rating':
                tl = tl[:5]
        else:
            tl = Tournament.objects.filter(tournament_hash=str(self.request.POST.get('tuid')))
           
            
        self.__getuser__()
        if tl:
            for val in tl:
                
                current_leaderboard =  Leaderboard.objects.filter(tournament=val)
                
                new_tl = {
                    'hash': str(val.tournament_hash),
                    'name': str(val.name),
                    'mode': str(val.mode),
                    'specific': str(val.specific),
                    'desc': str(val.desc),
                    'start': val.start,
                    'end': val.end,
                    'rules': val.rules,
                    'pool': float(val.pool),
                    'placement': float(val.placement),
                    'limit': int(val.register_limit),
                    'thumbnail': thumbnail_options[val.thumbnail],
                    'rating': val.rating,
                    'platform':[{'id':x['name']} for x in val.platforms.values()],
                    'registered_count': current_leaderboard.count(),
                    'top_3': None,
                    'host': str(val.hosted_by),
                    'is_entered': bool(self.__check_current__(val.tournament_hash)),
                    'last_disp': float(val.last_displacement),
                    'weekend_only': bool(val.weekend_only),
                        
                }
                
                
                top_count = 15
                if filter == 'entry':
                    top_count = new_tl['registered_count']
                try:
                    isLiked = TournamentLike.objects.get(user_id=self.request.user.id, tournament=val.tournament_hash)
                    new_tl['likedbyme'] = bool(isLiked.status)
                except dce.ObjectDoesNotExist:
                    new_tl['likedbyme'] = bool(False)
                
                n = 0
                if current_leaderboard.count() > 1: 
                    new_tl['top_3'] = []
                    for x in current_leaderboard.values().order_by('points')[:top_count]:
                        try:
                            cu_ap = AccountPreference.objects.get(user_id=x['player_id'])
                        
                            new_tl['top_3'].append(
                                {   
                                    'stat_id': x['player_id'],
                                    'username':cu_ap.user.username,
                                    'wins':x['wins'], 
                                    'losses': x['losses'],
                                    'points': x['points'], 
                                    'profile_pic': f'https://{settings.AWS_BUCKS["profile_pics"]}{cu_ap.user.profile_pic}' ,
                                    'server': cu_ap.server,
                                    'platform': cu_ap.platform.name,
                                    'matchmaking_status': x['matchmaking']
                                })
                        except dce.ObjectDoesNotExist:
                            break
             
                if filter == 'entry':
                    for index,user in enumerate(new_tl['top_3']):
                        if user['username'] == self.request.user.username:
                            new_tl['user_position'] = index + 1
                    gl = self.get_leaderboard(val)
                    if gl:
                        new_tl['stats'] = {'wins':gl.wins,
                                           'losses': gl.losses,
                                           'points': gl.points,
                                           'matchmaking': gl.matchmaking,
                                           }
                    if gl.previous_opponent:
                        new_tl['stats']['previous_opp'] = gl.previous_opponent.user.user.username
                self.tournaments_list.append(new_tl)
              
            return True
        
        return False
    
    
    def get_leaderboard(self, tourney=None, matchmaking=None):
        '''get the current leaderboard for the tournament id'''
        
        if not tourney:
            tuid = self.request.POST.get('tuid')
            if not tuid:
                return False
        else:
            tobj = tourney
        try:
            if not tourney:
                tobj = Tournament.objects.get(tournament_hash=tuid)
                if tobj:
                    try:
                        leaderboard = Leaderboard.objects.get(tournament=tobj.tournament_hash)
                        if leaderboard:
                            return leaderboard
                            
                    except dce.MultipleObjectsReturned: 
                        leaderboard = Leaderboard.objects.all().filter(tournament=tobj.tournament_hash, is_active=True)
                        if leaderboard.exists():
                            return leaderboard
                            
                    except dce.RequestAborted:
                        return False
                    except dce.BadRequest:
                        return False
            else:
                leaderboard = Leaderboard.objects.get(tournament=tobj, player=self.cu_stats)
                if leaderboard:
                    return leaderboard

                
        except dce.ObjectDoesNotExist:
            return False
        except dce.RequestAborted:
            return False
        return False
            
        
    @method_decorator(transaction.atomic)
    def set_liked(self):
        '''update the likes for the current tournament'''
        
        tuid = self.request.POST.get('tuid')
        self.status = bool(self.request.POST.get('status'))
        if not tuid or not self.status:
            return False
        try:
            with transaction.atomic():
                tournament = Tournament.objects.get(tournament_hash=tuid)
                if tournament:        
                    like_monitor = TournamentLike.objects.filter(user_id=self.request.user.id, tournament=tuid)
                    if like_monitor.exists():
                        for item in like_monitor:
                            if item.status is False:
                                like_monitor.update(status=True)
                                tournament.rating = tournament.rating + 1
                                break
                            elif item.status is True:
                                tournament.rating = tournament.rating - 1
                                like_monitor.update(status=False)
                                break
                        tournament.save()
                        return True 
                    else:
                        new_like = TournamentLike.objects.create(user_id=self.request.user.id, tournament=tournament, status=True)
                        if new_like:
                            new_like.save()
                            tournament.rating = tournament.rating + 1
                            tournament.save()
                            return True
                            
                
        except dce.ObjectDoesNotExist:
            pass
        except dce.RequestAborted:
            pass
            
        
        return False

    
    def __getuser__(self):
        '''get the current user'''
        self.cu_ap = None
        self.cu_stats = None
        
        try:
            self.cu_ap = AccountPreference.objects.get(user_id=self.request.user.id)
            if self.cu_ap:
                self.cu_stats = PlayerStat.objects.get(user=self.cu_ap)
        except dce.ObjectDoesNotExist:
            return False
            
    def __check_current__(self, tuid):
        '''check if user has current tournament in entries'''
        
        if self.cu_ap is not None:
            if self.cu_ap.entries.filter(tournament_hash=tuid).exists():
                return True
        return False

    def __remove_current__(self, tobj):
        '''remove the current tournament from the users entry'''
        
        self.cu_ap.entries.remove(tobj.id)
        rm = self.__check_current__(tobj.tournament_hash)
        if rm:
            return False
        return True
        
    def __add_current__(self, tobj):
        '''add the current tournament to user entires'''
        self.cu_ap.entries.add(tobj.id)
        check_new = self.__check_current__(tobj.tournament_hash)
        if check_new:
            return True
        return False
    
    @method_decorator(transaction.atomic)
    def set_entry(self):
        '''set the entry for the current tournamnet for the user'''
        
        
        tuid = self.request.POST.get('tuid')
        if not tuid: 
            return False
        self.return_status = None
        
        try: 
            with transaction.atomic():
                tournament = Tournament.objects.get(tournament_hash=tuid)
                self.__getuser__()
                if tournament:
                    if self.cu_ap:
                        #if the current tournament hash is in user entries.
                        is_registered = self.__check_current__(tuid)
                        #user wants to unregister
                        if is_registered:
                            leaderboard = Leaderboard.objects.get(tournament=tuid, player=self.cu_stats)
                            #remove from tournament so no re-entries are allowed.
                            leaderboard.delete()
                            removed = self.__remove_current__(tournament)
                            if removed:
                                self.return_status = 'Successfully '
                                return True 
                        else:
                            #user wants to register
                            if tournament.platforms.filter(name=self.cu_ap.platform.name).exists() or Leaderboard.objects.filter(tournament=tournament).count() >= tournament.register_limit:
                                register_now = self.__add_current__(tournament)
                                if register_now:
                                    leaderboard = Leaderboard.objects.create(tournament=tournament, player=self.cu_stats, matchmaking='idle', is_active=True)
                                    if leaderboard:
                                        leaderboard.save()
                                        self.return_status = 'Successfully'
                                        return True    
                            else:
                                self.return_status = 'PlatformFull'
                                return True         
        except dce.ObjectDoesNotExist:
            pass
        except dce.RequestAborted:
            pass
       
        
        
        return False