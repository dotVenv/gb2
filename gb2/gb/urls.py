from django.urls import path
from . import views

uiviews = views.UIViews()

urlpatterns = [
    path('', uiviews.index, name='index'),
]