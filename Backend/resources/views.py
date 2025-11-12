from rest_framework import generics, filters
from .models import LearningResource
from .serializers import LearningResourceSerializer
from django_filters.rest_framework import DjangoFilterBackend

class ResourceListAPIView(generics.ListAPIView):

    queryset = LearningResource.objects.all().order_by('-created_at')
    serializer_class = LearningResourceSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['platform', 'cost']
    search_fields = ['title', 'skills']  

class ResourceDetailAPIView(generics.RetrieveAPIView):
    """
    Retrieve a single learning resource by ID
    """
    queryset = LearningResource.objects.all()
    serializer_class = LearningResourceSerializer
    lookup_field = 'id'
