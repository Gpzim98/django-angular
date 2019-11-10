from django.db import models


class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField()
    address = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='members_profile', blank=True, null=True)

    def __str__(self):
        return self.name + " " + self.surname