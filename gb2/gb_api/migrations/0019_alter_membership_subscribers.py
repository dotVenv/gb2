# Generated by Django 5.1 on 2025-01-25 23:25

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0018_alter_membership_subscribers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='membership',
            name='subscribers',
            field=models.ManyToManyField(blank=True, related_name='membership_subscriber', to=settings.AUTH_USER_MODEL),
        ),
    ]
