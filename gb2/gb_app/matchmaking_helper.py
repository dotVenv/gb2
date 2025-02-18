#django imports
import django.core.exceptions as dce

#app imports
from gb_api.models import PlayerStat
from .tournament_helper import TnHelper


class MatchmakingHelper(TnHelper):
    
    def __init__(self, request):
        super().__init__(request)
        '''initialize the helper'''
        self.request = request
        self.__getuser__()
        
        
    def set_matchmaking(self):
        ''' update the matching status for the users db'''
        
        try:
            leaderboard = self.get_leaderboard(matchmaking=True)
            if leaderboard is not None or leaderboard is not False:
                if leaderboard.matchmaking == 'idle':
                    leaderboard.matchmaking = 'matchmaking'
                elif leaderboard.matchmaking == 'matchmaking':
                    leaderboard.matchmaking = 'idle'
                    
                leaderboard.save()
                self.matchmaking_status = leaderboard.matchmaking
                return True 
        except dce.ObjectDoesNotExist:
            return False
        
        return False
    
    def mm_search(self):
        '''start searching for another use'''
        
        try:
            leaderboard = self.get_leaderboard(matchmaking=True)
            if leaderboard:
                print(leaderboard)
                
            else:
                print('no leaderboard')
        except dce.ObjectDoesNotExist:
            return False
        except dce.RequestAborted:
            return False
        return True