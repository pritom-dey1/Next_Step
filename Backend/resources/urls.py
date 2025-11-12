from django.urls import path
from .views import ResourceListAPIView, ResourceDetailAPIView

urlpatterns = [
    path('', ResourceListAPIView.as_view(), name='resource-list'),
    path('<int:id>/', ResourceDetailAPIView.as_view(), name='resource-detail'),
]
