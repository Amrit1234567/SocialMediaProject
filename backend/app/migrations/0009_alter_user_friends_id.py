# Generated by Django 4.2.4 on 2024-03-19 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0008_remove_users_friends_alter_friends_friend_id_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user_friends",
            name="id",
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
