from django.contrib import admin
from .models import Job

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'location', 'experience_level', 'job_type')
    search_fields = ('title', 'company', 'required_skills')
