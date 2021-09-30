from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django import forms
from django.contrib import admin
from .models import *


@admin.register(Student)
class PersonAdmin(admin.ModelAdmin):
    fields = ('name', 'contact', 'email', 'groups', 'is_learned', 'created_at')
    list_display = ('id', 'name', 'contact', 'groups', 'is_learned',)
    list_display_links = ('id', 'name', 'groups', 'contact',)
    list_filter = ('groups', 'is_learned',)
    readonly_fields = ('created_at',)
    empty_value_display = '-пустой-'
    list_per_page = 64
    list_max_show_all = 8
    search_fields = ['name', 'contact', 'email', 'groups']


@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    fields = ('name', 'contact', 'email', 'groups', 'created_at')
    list_display = ('id', 'name', 'contact',)
    list_display_links = ('id', 'name', 'contact')
    list_filter = ('name', 'contact', 'email',)
    readonly_fields = ('created_at',)
    empty_value_display = '-пустой-'
    list_per_page = 64
    list_max_show_all = 8
    search_fields = ['name', 'contact', 'email', 'groups']


@admin.register(LearnGroup)
class LearnGroupAdmin(admin.ModelAdmin):
    fields = ('title', 'is_studies', 'created_at',)
    list_display = ('id', 'title', 'is_studies', 'created_at',)
    list_display_links = ('id', 'title',)
    list_filter = ('title', 'is_studies',)
    readonly_fields = ('created_at',)
    empty_value_display = '-пустой-'
    list_per_page = 64
    list_max_show_all = 8
    search_fields = ['title']

@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    content = forms.CharField(widget=CKEditorUploadingWidget())
    fields = ('theme', 'group', 'weekday', 'time_lesson', 'lesson_materials', 'absent', 'key_topic', 'is_display')
    list_display = ('id', 'theme', 'group', 'weekday', 'time_lesson', 'is_display')
    list_display_links = ('theme','group', 'weekday', 'time_lesson',)
    list_filter = ('group', 'weekday', 'time_lesson', 'key_topic', 'is_display')
    empty_value_display = '-пустой-'
    list_per_page = 64
    list_max_show_all = 8
    search_fields = ('theme', 'lesson_materials',)
    date_hierarchy = 'weekday'