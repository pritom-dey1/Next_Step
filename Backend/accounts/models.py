from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models

class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        email = self.normalize_email(email)
        user = self.model(email=email, full_name=full_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, full_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, full_name, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    USER_TYPES = [
        ('candidate', 'Candidate'),
        ('recruiter', 'Recruiter'),
    ]

    EDUCATION_LEVELS = [
        ('High School', 'High School'),
        ('Undergraduate', 'Undergraduate'),
        ('Graduate', 'Graduate'),
    ]

    EXPERIENCE_LEVELS = [
        ('Fresher', 'Fresher'),
        ('Junior', 'Junior'),
        ('Mid', 'Mid'),
    ]

    CAREER_TRACKS = [
        ('Web Development', 'Web Development'),
        ('Data', 'Data'),
        ('Design', 'Design'),
        
        ('Marketing', 'Marketing'),
    ]

    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=100)
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='candidate')

    education_level = models.CharField(max_length=50, choices=EDUCATION_LEVELS, blank=True, null=True)
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVELS, blank=True, null=True)
    preferred_career_track = models.CharField(max_length=50, choices=CAREER_TRACKS, blank=True, null=True)

    skills = models.JSONField(default=list, blank=True)
    bio = models.TextField(blank=True, null=True)
    cv_text = models.TextField(blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_verified = models.BooleanField(default=False)
    email_otp = models.CharField(max_length=6, blank=True, null=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    objects = UserManager()

    def __str__(self):
        return self.full_name
