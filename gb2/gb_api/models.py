from django.db import models
from django.contrib.auth.models import AbstractUser
from django_prometheus.models import ExportModelOperationsMixin


# Create your models here.
class gbUser(ExportModelOperationsMixin('gbUser'), AbstractUser):
    pass
