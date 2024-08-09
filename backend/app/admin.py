from django.contrib import admin
from .models import User_Friends, Post, Comment, Users, GroupChat, Friends,UserMessage_to_friends, friendMessage_to_user, Chat, UserMessage_to_group, othersMessage_to_group,Group_users
# Register your models here.
admin.site.register(Users)
admin.site.register(GroupChat)
admin.site.register(UserMessage_to_friends)
admin.site.register(friendMessage_to_user)
admin.site.register(Friends)
admin.site.register(Chat)
admin.site.register(UserMessage_to_group)
admin.site.register(othersMessage_to_group)
admin.site.register(Group_users)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(User_Friends)