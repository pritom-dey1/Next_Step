from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .serializers import RegisterSerializer, UserSerializer
from .utils import send_otp

from jobs.models import Job
from jobs.serializers import JobSerializer
from resources.models import LearningResource
from resources.serializers import LearningResourceSerializer
from rest_framework.parsers import MultiPartParser, FormParser


class ProfileUpdateView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def patch(self, request):
        user = request.user
        serializer = UserSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# ------------------- Registration with OTP -------------------
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def perform_create(self, serializer):
        user = serializer.save()
        send_otp(user)


# ------------------- Verify OTP -------------------
class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get("email")
        otp = request.data.get("otp")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)

        if user.email_otp == otp:
            user.is_verified = True
            user.email_otp = ""
            user.save()
            return Response({"message": "Account verified successfully"})
        else:
            return Response({"error": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)


# ------------------- Login -------------------
class LoginView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

        if not user.check_password(password):
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)

        if not user.is_verified:
            return Response({"error": "Your account is not verified"}, status=status.HTTP_403_FORBIDDEN)

        refresh = RefreshToken.for_user(user)
        return Response({"refresh": str(refresh), "access": str(refresh.access_token)})


# ------------------- Profile -------------------
class ProfileView(generics.RetrieveUpdateAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


# ------------------- Dashboard -------------------
class DashboardAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        user_skills = getattr(user, 'skills', [])

        # Candidate Dashboard
        if user.user_type == 'candidate':
            recommended_jobs = Job.objects.filter(required_skills__overlap=user_skills)[:5]
            recommended_resources = LearningResource.objects.filter(skills__overlap=user_skills)[:5]

            return Response({
                'user_type': user.user_type,
                'user_profile': {
                    'full_name': user.full_name,
                    'email': user.email,
                    'education_level': user.education_level,
                    'experience_level': user.experience_level,
                    'preferred_career_track': user.preferred_career_track,
                    'skills': user_skills,
                    'is_verified': user.is_verified,
                },
                'recommended_jobs': JobSerializer(recommended_jobs, many=True).data,
                'recommended_resources': LearningResourceSerializer(recommended_resources, many=True).data,
            })

        # Recruiter Dashboard
        elif user.user_type == 'recruiter':
            posted_jobs = Job.objects.filter(created_by=user)

            return Response({
                'user_type': user.user_type,
                'user_profile': {
                    'full_name': user.full_name,
                    'email': user.email,
                    'is_verified': user.is_verified,
                },
                'posted_jobs': JobSerializer(posted_jobs, many=True).data,
            })
