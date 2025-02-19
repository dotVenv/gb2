# Generated by Django 5.1 on 2025-02-15 20:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gb_api', '0073_alter_playerstat_csr'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tournament',
            name='end',
            field=models.DateTimeField(default=datetime.datetime(2025, 2, 15, 21, 0, tzinfo=datetime.timezone.utc)),
        ),
        migrations.AlterField(
            model_name='tournament',
            name='start',
            field=models.DateTimeField(default=datetime.datetime(2025, 2, 15, 18, 0)),
        ),
        migrations.AlterField(
            model_name='tournament',
            name='thumbnail',
            field=models.CharField(blank=True, choices=[('NBA2K_STRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/nba2k_restricted.png'), ('NBA2K_UNSTRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/nba2k_unrestricted.png'), ('MADDEN_STRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/madden_restricted.png'), ('MADDEN_UNSTRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/madden_unrestricted.png'), ('MARVEL_STRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/marvels_restricted.png'), ('MARVEL_UNSTRICT', 'https://gbthumbnails.s3.us-east-2.amazonaws.com/marvels_unrestricted.png')], max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='tournament',
            name='tournament_hash',
            field=models.CharField(default='e0af2f5d-3cf0-4b8f-adfb-cade94b17d27', max_length=255, unique=True),
        ),
    ]
