# Generated by Django 3.2.7 on 2023-02-08 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0002_alter_student_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicationsfortraining',
            name='ip',
            field=models.GenericIPAddressField(default='0.000.000.000', verbose_name='IP'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='student',
            name='password',
            field=models.CharField(default=4719, max_length=128, verbose_name='Пароль'),
        ),
    ]
