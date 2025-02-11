#django imports
import django.core.exceptions as dce

#other imports
from gb_api.models import Tournament

class TnHelper():
    '''a class for helping manage tournaments'''
    
    def __init__(self, request):
        self.request = request
    
        
        
    def get_tournaments(self, filter='id'):
        '''get tournaments, if a filter is set, use the filter'''
        
        aws_thumbnail_url = 'https://gbthumbnails.s3.us-east-2.amazonaws.com'
        thumbnail_options = {
            'NBA2K_STRICT':f'{aws_thumbnail_url}/nba2k_restricted.png',
            'NBA2K_UNSTRICT':f'{aws_thumbnail_url}/nba2k_unrestricted.png',
            
            'MADDEN_STRICT': f'{aws_thumbnail_url}/madden_restricted',
            'MADDEN_UNSTRICT': f'{aws_thumbnail_url}/madden_unrestricted',
            
            'MARVEL_STRICT': f'{aws_thumbnail_url}/marvel_restricted',
            'MARVEL_UNSTRICT': f'{aws_thumbnail_url}/marvel_unrestricted',
        }
        
        self.tournaments_list = []
        tl = None
        if filter: #there is no filter
            tl = Tournament.objects.all().order_by(filter)
            if filter == 'rating':
                tl = tl[:5]
            
        if tl:
            for val in tl:
                
                new_tl = {
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
                    'registered_count': val.registered.count(),
                    'registered': None,
                        
                }
                
                if val.registered.count() > 0: new_tl['registered'] = [x['user']['username'] for x in val.registered ]
                self.tournaments_list.append(new_tl)
            return True
        
        return False