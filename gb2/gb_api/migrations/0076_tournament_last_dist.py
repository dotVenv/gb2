# Generated by Django 5.1 on 2025-02-15 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0075_alter_tournament_placement_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='tournament',
            name='last_dist',
            field=models.DecimalField(decimal_places=2, default=33.0, max_digits=7),
        ),
    ]
