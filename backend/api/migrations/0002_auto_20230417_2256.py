# Generated by Django 3.2.7 on 2023-04-17 20:56

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='note',
            options={'ordering': ['due_date']},
        ),
        migrations.AddField(
            model_name='note',
            name='due_date',
            field=models.DateTimeField(default=api.models.two_weeks),
        ),
    ]
