# Generated by Django 5.0.1 on 2024-02-04 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='contactEnquiry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('contNo', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=50)),
                ('message', models.TextField()),
            ],
            options={
                'db_table': 'contactEnquiry',
            },
        ),
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productName', models.CharField(max_length=200)),
                ('ProductId', models.CharField(max_length=50)),
                ('Descripation', models.CharField(max_length=500)),
                ('Image', models.ImageField(blank=True, upload_to='question_images')),
            ],
        ),
    ]