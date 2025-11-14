from django.urls import path
from .views import JobListAPIView, JobDetailAPIView, JobCreateAPIView, JobFilterOptionsAPIView

urlpatterns = [
    path('', JobListAPIView.as_view(), name='job-list'),
    path('create/', JobCreateAPIView.as_view(), name='job-create'),
    path('<int:id>/', JobDetailAPIView.as_view(), name='job-detail'),
    path('filters/', JobFilterOptionsAPIView.as_view(), name='job-filters'),
]

