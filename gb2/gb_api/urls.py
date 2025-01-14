from django.urls import path, re_path, include
from . import views


urlpatterns = [
    # re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.jwt')),

]