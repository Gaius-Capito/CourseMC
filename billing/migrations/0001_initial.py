# Generated by Django 3.2.7 on 2023-02-08 06:15

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Course', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InformationPayments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.PositiveIntegerField(default=0, verbose_name='Сумма')),
                ('datetime', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='Course.student', verbose_name='Ученик')),
            ],
            options={
                'verbose_name': 'Платёж',
                'verbose_name_plural': 'Платежи',
            },
        ),
        migrations.CreateModel(
            name='EducationCost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.PositiveIntegerField(default=0, verbose_name='Сумма')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='Course.student', verbose_name='Ученик')),
            ],
            options={
                'verbose_name': 'Размер оплаты',
                'verbose_name_plural': 'Размеры оплат',
            },
        ),
    ]