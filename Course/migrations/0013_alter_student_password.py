# Generated by Django 3.2.7 on 2021-09-27 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0012_auto_20210927_1351'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(default=4245, max_length=128, verbose_name='Пароль'),
        ),
    ]