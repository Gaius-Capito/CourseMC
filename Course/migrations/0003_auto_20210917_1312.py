# Generated by Django 3.2.7 on 2021-09-17 13:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Course', '0002_auto_20210917_1244'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='teacher',
            options={'verbose_name': 'Учитель', 'verbose_name_plural': 'Учителя'},
        ),
        migrations.AddField(
            model_name='student',
            name='groups',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Course.learngroup'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='teacher',
            name='groups',
            field=models.ManyToManyField(to='Course.LearnGroup', verbose_name='Группы'),
        ),
    ]