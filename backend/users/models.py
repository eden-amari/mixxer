from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    name = CharField(_("Name of User"), blank=True, max_length=255)
    first_name = None
    last_name = None

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',
        blank=True
    )

    def get_absolute_url(self) -> str:
        return reverse("users:detail", kwargs={"username": self.username})