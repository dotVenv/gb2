#django imports
import django.core.exceptions as dce
from django.conf import settings
from django.db import transaction
from django.utils.decorators import method_decorator

#app imports
from gb_api.models import PlayerStat, Leaderboard
from .tournament_helper import TnHelper
import inspect


class MatchmakingHelper(TnHelper):
    
    def __init__(self, request):
        super().__init__(request)
        '''initialize the helper'''
        self.request = request
        self.__getuser__()
        
        
    def set_matchmaking(self):
        ''' update the matching status for the users db'''
        
        try:
            print('match making')
            leaderboard = self.get_leaderboard(matchmaking=True)
            if leaderboard is not None or leaderboard is not False:
                
                if len(leaderboard) > 1:
                    self.matchmaking_status = None
                    for user in leaderboard:
                        if user.matchmaking == 'connecting' or user.matchmaking == 'matchmaking':
                        
                            user.matchmaking='idle'
                            user.next_opponent = None
                            self.matchmaking_status = 'idle'
                            user.save()
                            
                        elif user.matchmaking == 'idle':
                            user.matchmaking = 'matchmaking'
                            user.next_opponent = None
                            self.matchmaking_status = 'matchmaking'
                            
                            user.save()
                    
                    return True
                    
                elif leaderboard.matchmaking == 'idle':
                    leaderboard.matchmaking = 'matchmaking'
                elif leaderboard.matchmaking == 'matchmaking':
                    leaderboard.matchmaking = 'idle'
                    
                leaderboard.save()
                self.matchmaking_status = leaderboard.matchmaking
                return True 
        except dce.ObjectDoesNotExist:
            return False
        
        return False
    
    @method_decorator(transaction.atomic)
    def __save_matchup__(self,cu,ocu=None):
        '''save the matchmaking results'''
    
        with transaction.atomic():
            if ocu is not None:
                ocu.matchmaking = 'connecting'
                ocu.next_opponent = cu.player
                cu.matchmaking = 'connecting'
                cu.next_opponent = ocu.player
                cu.save()
                ocu.save()
            
            else:
                ocu = Leaderboard.objects.get(player=cu.next_opponent)
              
                
        
        if ocu is None:
            return False
        

        self.matchmaking_status = {
            'status': 'connecting', 
            'opponent_name': str(ocu.player.user.user.username), 
            'opponent_server': str(ocu.player.user.server),
            'opponent_platform': str(ocu.player.user.platform.name),
            'opponent_profile_pic': str(f'https://{settings.AWS_BUCKS["profile_pics"]}{ocu.player.user.user.profile_pic}'),
            'wins': ocu.wins,
            'losses': ocu.losses
            }
        
        return True
        
        
    def mm_search(self):
        '''start searching for another use'''
        
    
        try:
            potential_next = None
            leaderboard = self.get_leaderboard(matchmaking=True)
            if leaderboard:
                
                cu = Leaderboard.objects.get(player=self.cu_stats)
                if cu.matchmaking == 'connecting':
                    if self.__save_matchup__(cu=cu):
                        return True
                if cu:
                    for index, user in enumerate(leaderboard.filter(matchmaking='matchmaking').order_by('?').values()):
                     
                        if user['player_id'] == self.request.user.id:
                            continue
                        ocu = Leaderboard.objects.get(player_id=user['player_id'])
                    
                        #if previous ocu.player
                        if user['previous_opponent_id'] is not None: 
                            if int(user['previous_opponent_id']) != int(ocu.player.id):
                                if ocu.player.user.server == self.cu_ap.server:
                                    if ocu.player.user.platform.name == self.cu_ap.platform.name:
                                        if self.__save_matchup__(cu,ocu):
                                            return True
                                    else:
                                        potential_next = user
                                    
                                elif ocu.player.user.platform.name == self.cu_ap.platform.name:
                                    if self.__save_matchup__(cu,ocu):
                                        return True
                                if potential_next:
                                    if self.__save_matchup__(cu,potential_next):
                                        return True
                                else:
                                    potential_next = ocu
                                    continue
                        #otherwise if first ocu.player      
                        else:
                            if ocu.player.user.server == self.cu_ap.server:
                                if ocu.player.user.platform.name == self.cu_ap.platform.name:
                                    if self.__save_matchup__(cu,ocu):
                                        return True
                                else:
                                    potential_next = user
                                    
                            elif ocu.player.user.platform.name == self.cu_ap.platform.name:
                                if self.__save_matchup__(cu,ocu):
                                    return True
                            
                            if potential_next:
                                if self.__save_matchup__(cu,potential_next):
                                    return True
                            else:
                                potential_next = ocu
                                continue
                                
                return False
            else:
                return False
            
        except dce.ObjectDoesNotExist:
            return False
        except dce.RequestAborted:
            return False
        return True