from django.urls import path
from .views import ExtractSkillsAPIView

urlpatterns = [
    path("extract-skills/", ExtractSkillsAPIView.as_view()),
]
