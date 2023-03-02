from django.db import models
from django.contrib.auth.models import User


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    ingredients = models.CharField(max_length=255)
    time = models.IntegerField()
    instructions = models.CharField(max_length=1000)
    author = models.ForeignKey(
    User, on_delete=models.CASCADE, null=True, related_name='entries')
    
    def __str__(self):
        return self.name

