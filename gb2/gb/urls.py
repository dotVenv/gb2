from django.urls import path
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
    path('logout', uiviews.logout_view, name='logout')
]