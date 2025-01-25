from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

appviews = views.APPViews()

urlpatterns = [
    path('', appviews.dashboard, name='dashboard'),
    path('user-defaults', appviews.user_defaults, name='user_defaults'),
    path('all-memberships', appviews.all_memberships, name='all_memberships'),
    
    #steupsteps
    path('setup-steps', appviews.setup_steps , name='setup_steps'), 
    
    #user logout
    path('logout', appviews.logout_view, name='logout'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)