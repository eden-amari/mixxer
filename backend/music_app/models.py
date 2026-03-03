from django.db import models
from django.conf import settings

class Song(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    bpm = models.IntegerField()
    release_date = models.DateField()

    def __str__(self):
        return f"{self.title} by {self.artist}"

class Playlist(models.Model):
    name = models.CharField(max_length=200)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    songs = models.ManyToManyField(Song, blank=True)
    is_public = models.BooleanField(default=False)
    like_count = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} ({self.user.username})"