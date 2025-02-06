from gb_api.models import gbUser,SupportTicket 



class SupportTicketer():
    '''CRUD for ticket system'''
    
    def __init__(self, request):
        self.request = request
        
        
    def create_ticket(self, sev, topic):
        '''create a ticket for the current request'''
        
        
        if self.__check_duplicate_ticket(sev,topic) is True:
            return False 
        new_ticket = SupportTicket.objects.create(user_id=self.request.user.id, topic=topic, severity=sev)
        if new_ticket:
            new_ticket.save()
            
            return True
        
        return False
    
    def __check_duplicate_ticket(self, sev,topic):
        '''check if the user has the same topic unanswered'''
        
        check_tickets = SupportTicket.objects.filter(topic__lte=topic, severity=sev, user_id=self.request.user.id, status='open')
        return check_tickets.exists()
    
    def get_tickets(self):
        '''return all tickets for the current user'''
        
        ticks = SupportTicket.objects.filter(user_id=self.request.user.id)
        if ticks.exists():
            self.tickets = {}
            for key, val in ticks.items():
                print(key,val)
                
        
        