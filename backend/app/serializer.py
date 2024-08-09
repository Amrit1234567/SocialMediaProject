from rest_framework import serializers
from .models import Like, Comment, Post, UserMessage_to_friends, friendMessage_to_user, Friends, UserMessage_to_group, othersMessage_to_group, Group_users, GroupChat, Users, Chat, Products

class UserMessageToFriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMessage_to_friends
        fields = '__all__'

class FriendMessageToUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = friendMessage_to_user
        fields = '__all__'

class FriendsSerializer(serializers.ModelSerializer):
    usermessage = UserMessageToFriendsSerializer(many=True)
    friendmessage = FriendMessageToUserSerializer(many=True)

    class Meta:
        model = Friends
        fields = ['friend_id', 'friend_name', 'usermessage', 'friendmessage']


class UserMessageToGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMessage_to_group
        fields = '__all__'

class OthersMessageToGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = othersMessage_to_group
        fields = '__all__'

class GroupUsersSerializer(serializers.ModelSerializer):
    usermessage = UserMessageToGroupSerializer()
    othersmessage = OthersMessageToGroupSerializer()

    class Meta:
        model = Group_users
        fields = ['user_id', 'user_name', 'usermessage', 'othersmessage']

class GroupChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupChat
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    friends = FriendsSerializer(allow_null=True, required=False)
    groupchat = GroupChatSerializer(allow_null=True, required=False)

    class Meta:
        model = Users
        fields = ['user_id', 'user_name', 'password', 'friends', 'groupchat']

class ChatSerializer(serializers.ModelSerializer):
    user = UsersSerializer()

    class Meta:
        model = Chat
        fields = '__all__'

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
    
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['user_id', 'post_id', 'actual_comment']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"