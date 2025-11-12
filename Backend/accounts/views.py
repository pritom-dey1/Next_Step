from rest_framework import generics, permissions
from .models import User
from .serializers import RegisterSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from jobs.models import Job
from jobs.serializers import JobSerializer
from resources.models import LearningResource
from resources.serializers import LearningResourceSerializer
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
class DashboardAPIView(APIView):
    """
    Return logged-in user profile, recommended jobs, and recommended resources
    """
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        user_skills = getattr(user, 'skills', [])

        recommended_jobs = Job.objects.filter(required_skills__overlap=user_skills)[:5]

        recommended_resources = LearningResource.objects.filter(skills__overlap=user_skills)[:5]

        return Response({
            'user_profile': {
                'full_name': user.full_name,
                'email': user.email,
                'education_level': getattr(user, 'education_level', None),
                'experience_level': getattr(user, 'experience_level', None),
                'preferred_track': getattr(user, 'preferred_track', None),
                'skills': user_skills,
            },
            'recommended_jobs': JobSerializer(recommended_jobs, many=True).data,
            'recommended_resources': LearningResourceSerializer(recommended_resources, many=True).data,
        })