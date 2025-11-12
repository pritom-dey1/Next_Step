from django.contrib import admin
from .models import LearningResource

@admin.register(LearningResource)
class LearningResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'platform', 'cost', 'created_at') 
    search_fields = ('title', 'skills', 'platform')           
    list_filter = ('platform', 'cost')                        
