# Generated by Django 5.1 on 2025-02-13 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0069_alter_tournament_previous_hashes_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tournament',
            name='registered',
        ),
        migrations.AlterField(
            model_name='tournament',
            name='tournament_hash',
            field=models.CharField(default='9b8906d7-f38c-4c18-8b97-39ca57bad227', max_length=255, unique=True),
        ),
    ]
