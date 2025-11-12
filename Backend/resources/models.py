from django.db import models

class LearningResource(models.Model):
    title = models.CharField(max_length=200)
    platform = models.CharField(max_length=100)  # YouTube, Coursera, Udemy etc.
    url = models.URLField()
    skills = models.JSONField(default=list)  # ["Python", "Excel"]
    cost = models.CharField(max_length=10, choices=[("Free", "Free"), ("Paid", "Paid")])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
