# Generated by Django 5.1 on 2025-02-01 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0025_tournament_thumbnail'),
    ]

    operations = [
        migrations.AddField(
            model_name='tournament',
            name='mode',
            field=models.CharField(blank=True, choices=[('tourney', 'tourney'), ('elim', 'elim')], max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='tournament',
            name='name',
            field=models.CharField(blank=True, choices=[('rivals', 'rivals'), ('nba2k', 'nba2k'), ('madden', 'madden'), ('fortnite', 'fortnite'), ('cod', 'cod')], max_length=15, null=True),
        ),
    ]
