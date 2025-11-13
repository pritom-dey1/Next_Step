from rest_framework import generics, filters ,permissions
from .models import Job
from .serializers import JobSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response


class JobPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 50

class JobListAPIView(generics.ListAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['location', 'job_type', 'experience_level']
    search_fields = ['title', 'company', 'required_skills']
    pagination_class = JobPagination  # ✅ pagination add

class JobPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 50

class JobListAPIView(generics.ListAPIView):
    queryset = Job.objects.all().order_by('-created_at')
    serializer_class = JobSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['location', 'job_type', 'experience_level']
    search_fields = ['title', 'company', 'required_skills']
    pagination_class = JobPagination 
class JobDetailAPIView(generics.RetrieveAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    lookup_field = 'id'
class JobRecommendationAPIView(APIView):
    """
    Recommend jobs based on the logged-in user's skills and preferred career track.
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        user_skills = getattr(user, 'skills', [])
        preferred_track = getattr(user, 'preferred_career_track', None)

        recommended_jobs = Job.objects.all()
        if user_skills:
            recommended_jobs = recommended_jobs.filter(
                required_skills__overlap=user_skills  # Postgres ArrayField or JSONField
            )
        
        if preferred_track:
            recommended_jobs = recommended_jobs.filter(track=preferred_track)

        serializer = JobSerializer(recommended_jobs, many=True)
        return Response({
            "user_skills": user_skills,
            "recommended_jobs_count": recommended_jobs.count(),
            "recommended_jobs": serializer.data,
        })

class JobCreateAPIView(generics.CreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)