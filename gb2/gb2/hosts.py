from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns('',
    host(r'www', settings.URLCONF, name='www'),
    #host(r'app', 'gb_dash.urls', name='app'),
)