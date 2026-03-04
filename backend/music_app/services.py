from .models import Song, Playlist
from django.contrib.auth import get_user_model
User = get_user_model()

# CRUD Functions for SONGS #

def create_song(title, artist, genre, bpm, release_date):
    # creates a new song in the db
    return Song.objects.create(
        title = title,
        artist = artist,
        genre = genre,
        bpm = bpm,
        release_date = release_date
    )

def list_songs():
    # lists all songs in the db
    return Song.objects.all()

def get_song(song_id):
    # fetch a single song by id
    return Song.objects.get(id = song_id)

def update_song(song_id, **fields):
    # update a song's fields
    Song.objects.filter(id = song_id).update(**fields)

def delete_song(song_id):
    # delete a song by id
    Song.objects.filter(id=  song_id).delete()

# ------------------------------------- #

# CRUD Functions for Playlists #

def create_playlist(user, name, is_public = False):
    # creates a new playlist for user
    return Playlist.objects.create(
        user = user,
        name = name,
        is_public = is_public
    )

def get_user_playlists(user):
    # returns all playlists belonging to a user
    return Playlist.objects.filter(user = user)

def add_song(playlist, song):
    # add a song to a playlist
    playlist.songs.add(song)

def list_public_playlists():
    # lists all public playlists
    return Playlist.objects.filter(is_public = True)

def increment_like_count(playlist):
    # increase like count of a playlist by 1; upvote
    playlist.like_count += 1
    playlist.save()

def get_playlist(playlist_id):
    # fetch a single playlist by id
    return Playlist.objects.get(id=playlist_id)

def update_playlist(playlist_id, **fields):
    # update a playlist's fields
    Playlist.objects.filter(id=playlist_id).update(**fields)

def delete_playlist(playlist_id):
    # delete a playlist by id
    Playlist.objects.filter(id=playlist_id).delete()

def remove_song(playlist, song):
    # remove a song from a playlist
    playlist.songs.remove(song)

def decrement_like_count(playlist):
    # decrease like count of a playlist by 1
    if playlist.like_count > 0:
        playlist.like_count -= 1
        playlist.save()


    