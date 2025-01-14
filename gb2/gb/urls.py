from django.urls import path
from . import views

uiviews = views.UIViews()

urlpatterns = [
    path('', uiviews.index, name='index'),
    path('about-us', uiviews.about_us, name='aboutus'),
    path('FAQ', uiviews.freq_asked, name='faq'),
    path('contact-us', uiviews.contact_us, name='contactus'),
    
    #accs
    path('login', uiviews.login, name='login')
]