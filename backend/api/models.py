from django.db import models
from django.utils import timezone

def two_weeks():
    return timezone.now() + timezone.timedelta(days=14) 
# Create your models here.


class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(default=two_weeks)

    def __str__(self):
        return self.body[0:40]
    
    class Meta:
        ordering = ["due_date"]
