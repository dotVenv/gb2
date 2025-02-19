# Generated by Django 5.1 on 2025-02-01 19:22

import django.db.models.deletion
import django_prometheus.models
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0034_alter_tournament_rules'),
    ]

    operations = [
        migrations.CreateModel(
            name='Announc',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('desc', models.TextField(blank=True, null=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='announcer', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'Announcments',
            },
            bases=(django_prometheus.models.ExportModelOperationsMixin('Announc'), models.Model),
        ),
    ]
