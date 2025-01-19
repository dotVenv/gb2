#djano imports
from django.shortcuts import render,redirect
from django.views.generic import TemplateView

# Create your views here.

class APPViews(TemplateView):
    
    def dashboard(self, request):
        
        print('reaching dashboard ')
        
        context = {}
        return render(request, 'gb_app/templates/index.html', context)