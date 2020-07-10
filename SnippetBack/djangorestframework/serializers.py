from django.contrib.auth import get_user_model
from rest_framework.serializers import ModelSerializer
from snippet.models import Snippet, Tag


class TagSerializer(ModelSerializer):
    class Meta:
        fields = "__all__"
        model = Tag


class UserSerializer(ModelSerializer):
    class Meta:
        fields = ("username", "password", "email")
        model = get_user_model()
        extra_kwargs = {
            "password": {"write_only": True},
            "email": {"write_only": True},
        }


class SnippetSerializer(ModelSerializer):
    tags = TagSerializer(many=True, source="tag_set")
    class Meta:
        fields = "__all__"
        model = Snippet
        depth = 1
