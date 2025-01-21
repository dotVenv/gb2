#djano imports
from django.shortcuts import render,redirect,reverse
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.contrib.auth import  logout 
# Create your views here.


def qc(request):
    if not request.user:
        print('unauth')
        return redirect('http://www.gamers-bounty-dev.com:8000/login')
        
class APPViews(TemplateView):

    def qc(self,request):
        print('checking')
        if not request.user:
            print('unauth')
            return redirect(reverse('logout'))
        
        
    def dashboard(self, request):
        
        qc(request=request)
        
        print(request)
        print('ok reached')
        
        context = {}
        return render(request, 'gb_app/templates/index.html', context)
    
    def logout_view(self, request):
        '''logout and clear the cookie for the user'''
        
        lgout = logout(request)
        
        return redirect('http://gamers-bounty-dev.com:8000')