from django.conf import settings
from django_hosts import patterns, host
from django.urls import include

host_patterns = patterns('',
    host(r'www', settings.URLCONF, name='www'),
    host(r'api', include('gb_api.urls'), name='api'),
    host(r'app', 'gb_app.urls', name='app'),
    
)