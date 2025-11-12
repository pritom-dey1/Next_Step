from django.urls import path
from .views import JobListAPIView, JobDetailAPIView

urlpatterns = [
    path('', JobListAPIView.as_view(), name='job-list'),
    path('<int:id>/', JobDetailAPIView.as_view(), name='job-detail'),
]
