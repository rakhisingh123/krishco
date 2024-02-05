from django.db import models
from django.core.files.base import File
import os, os.path

# Create your models here.
class contactEnquiry(models.Model):
    name=models.CharField(max_length=50)
    contNo=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    message=models.TextField()
    
    class Meta():
        db_table='contactEnquiry'
    
class product(models.Model):
    productName= models.CharField(max_length=200)
    ProductId = models.CharField(max_length=50)
    Descripation = models.CharField(max_length=500)
    Image = models.ImageField(upload_to='images/', blank=True)
def __str__(self):
    return self.name
