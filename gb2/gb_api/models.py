from django.db import models
from django.contrib.auth.models import AbstractUser
from django_prometheus.models import ExportModelOperationsMixin


# Create your models here.
class gbUser(ExportModelOperationsMixin('gbUser'), AbstractUser):
    
    profile_pic = models.ImageField(default='profile_pics/default.png', blank=True, null=True, upload_to='profile_pics/')
    mfa_active = models.IntegerField(default=0)
    pass
