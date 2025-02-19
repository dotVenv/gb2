# Generated by Django 5.1 on 2025-02-12 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0058_match_date_alter_tournament_tournament_hash'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='points_earned',
        ),
        migrations.RemoveField(
            model_name='match',
            name='rank_points_earned',
        ),
        migrations.AddField(
            model_name='match',
            name='loser_points_earned',
            field=models.IntegerField(default=8),
        ),
        migrations.AddField(
            model_name='match',
            name='loser_rank_points_loss',
            field=models.IntegerField(default=-2),
        ),
        migrations.AddField(
            model_name='match',
            name='winner_points_earned',
            field=models.IntegerField(default=55),
        ),
        migrations.AddField(
            model_name='match',
            name='winner_rank_points_earned',
            field=models.IntegerField(default=2.5),
        ),
        migrations.AlterField(
            model_name='tournament',
            name='tournament_hash',
            field=models.CharField(default='aabbd950-54dd-46ae-9671-4f878ebc9b4d', max_length=255),
        ),
    ]
