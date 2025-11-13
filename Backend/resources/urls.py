from django.urls import path
from .views import ResourceListAPIView, ResourceDetailAPIView,ResourceCreateAPIView

urlpatterns = [
    path('', ResourceListAPIView.as_view(), name='resource-list'),
    path('create/', ResourceCreateAPIView.as_view(), name='resource-create'),

    path('<int:id>/', ResourceDetailAPIView.as_view(), name='resource-detail'),
]
