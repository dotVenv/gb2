# Generated by Django 5.1 on 2025-02-01 17:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0027_transaction_wallet'),
    ]

    operations = [
        migrations.AddField(
            model_name='accountpreference',
            name='fl',
            field=models.ManyToManyField(related_name='friends_list', to='gb_api.accountpreference'),
        ),
        migrations.AddField(
            model_name='accountpreference',
            name='wallet',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_wallet', to='gb_api.wallet'),
        ),
    ]
