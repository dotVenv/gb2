# Generated by Django 5.1 on 2025-02-01 16:57

import gb_api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0026_tournament_mode_alter_tournament_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hash', models.CharField(blank=True, max_length=255, null=True)),
                ('date', models.DateTimeField()),
                ('desc', models.CharField(blank=True, max_length=255, null=True)),
                ('amount', models.DecimalField(decimal_places=2, default=0.0, max_digits=7)),
                ('action', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.CharField(blank=True, max_length=100, null=True)),
            ],
            options={
                'verbose_name_plural': 'Transactions',
            },
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('strip_data', models.JSONField(default=gb_api.models.stripe_user)),
                ('crypto_data', models.JSONField(default=gb_api.models.crypto_user)),
                ('balance', models.DecimalField(decimal_places=2, default=0.0, max_digits=7)),
                ('is_active', models.BooleanField(default=True)),
                ('transactions', models.ManyToManyField(related_name='wallet_transactions', to='gb_api.transaction')),
            ],
            options={
                'verbose_name_plural': 'Wallets',
            },
        ),
    ]
