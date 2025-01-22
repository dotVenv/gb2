from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(gbUser)
admin.site.register(Oauth)
admin.site.register(ContactRequest)
