# Generated by Django 3.2.7 on 2023-03-15 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todolist', '0002_auto_20230222_1556'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todolist',
            name='created_at',
            field=models.DateField(default='2023-03-15', verbose_name='Создано'),
        ),
        migrations.AlterField(
            model_name='todolist',
            name='due_date',
            field=models.DateField(default='2023-03-15', verbose_name='Дата'),
        ),
    ]