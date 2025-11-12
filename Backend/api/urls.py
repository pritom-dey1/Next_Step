from django.urls import path, include
from jobs.views import JobRecommendationAPIView
urlpatterns = [
    path('jobs/', include('jobs.urls')),  
    path('jobs/recommendations/', JobRecommendationAPIView.as_view(), name='job-recommendations'),

   path('resources/', include('resources.urls')),

]
