from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(gbUser)
admin.site.register(Oauth)
admin.site.register(ContactRequest)
admin.site.register(EmailVerification)
admin.site.register(Membership)
admin.site.register(AccountPreference)
admin.site.register(Platform)
admin.site.register(Tournament)
admin.site.register(Wallet)
admin.site.register(Transaction)
admin.site.register(Announc)
admin.site.register(SupportTicket)
admin.site.register(MFA_Rotator)