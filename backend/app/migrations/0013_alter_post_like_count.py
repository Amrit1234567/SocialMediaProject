# Generated by Django 4.2.4 on 2024-03-19 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0012_post_like_count"),
    ]

    operations = [
        migrations.AlterField(
            model_name="post",
            name="like_count",
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
