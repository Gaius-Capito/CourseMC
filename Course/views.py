from django.contrib import messages
from django.contrib.auth import get_user
from django.db.models import Q
from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic.edit import FormView
from django.contrib.auth.models import User
from .forms import *
from django.contrib.auth.decorators import login_required
from .models import Student, LearnGroup, Schedule
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import ListView


class StudentRecordView(FormView):
    template_name = 'Course/index.html'
    form_class = StudentForm
    login_url = '/login/'

    def form_valid(self, form):
        form.save()
        name = form.cleaned_data['name']
        email = form.cleaned_data['email']
        password = form.cleaned_data['password']
        user = User.objects.create_user(name, email, password)
        user.save()
        response = {
            'success': True,
        }
        return JsonResponse(response)

    def form_invalid(self, form):
        response = {
            'success': False,
            'error_message': 'Форма заполнена не верно!'
        }
        return JsonResponse(response)


class TimetableView(LoginRequiredMixin, ListView):
    model = Schedule
    template_name = 'Course/timetable.html'
    context_object_name = 'schedules'
    paginate_by = 16

    def get_queryset(self):
        student = Student.objects.get(name=get_user(self.request).username)
        student_group = Schedule.objects.filter(group=student.groups).order_by('-pk')
        if self.__get_param('theme') or self.__get_param('primary') or self.__get_param('absent'):
            theme = self.request.GET.get('theme')
            student_group = student_group.filter(theme__icontains=theme).filter(key_topic__exact=True).filter(absent__name__iexact=f'{student.name}')

        return student_group

    def __get_param(self, name):
        return self.request.GET.get(name)