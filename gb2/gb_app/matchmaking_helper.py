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
            if not self.cu_stats:
                return False
            self.matchmaking_status = 'matchmaking'
            print('ready to set matchmaking status')
            return True 
        except dce.ObjectDoesNotExist:
            return False
        
        return False
    