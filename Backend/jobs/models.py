from django.db import models
from accounts.models import User
EXPERIENCE_LEVEL_CHOICES = [
    ('Fresher', 'Fresher'),
    ('Junior', 'Junior'),
    ('Mid', 'Mid'),
]

JOB_TYPE_CHOICES = [
    ('Internship', 'Internship'),
    ('Part-time', 'Part-time'),
    ('Full-time', 'Full-time'),
    ('Freelance', 'Freelance'),
]

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()  # ✅ new
    company = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    required_skills = models.JSONField(default=list)
    experience_level = models.CharField(max_length=20, choices=EXPERIENCE_LEVEL_CHOICES)
    job_type = models.CharField(max_length=20, choices=JOB_TYPE_CHOICES)
    image_url = models.URLField(blank=True, null=True)  
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} at {self.company}"