from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

uiviews = views.UIViews()

urlpatterns = [
    path('', uiviews.index, name='index'),
    path('about-us', uiviews.about_us, name='aboutus'),
    path('FAQ', uiviews.freq_asked, name='faq'),
    path('contact-us', uiviews.contact_us, name='contactus'),
    path('initcheck', uiviews.init_check, name='initcheck'),
    
    #accs
    path('login', uiviews.login_view, name='login'),
    path('signup', uiviews.signup_view, name='signup'),
    path('logout', uiviews.logout_view, name='logout'),
    
    #oauth
    path('oauth/google/', uiviews.oauth_google, name='oauth_google'),
    path('oauth/google/callback', uiviews.oauth_google_callback, name='oauth_google_callback')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)