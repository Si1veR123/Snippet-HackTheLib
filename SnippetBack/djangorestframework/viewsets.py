from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . serializers import *
from django.contrib.auth import get_user_model
from snippet.models import Snippet
import json


class UserViewset(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer

    def get_queryset(self):
        return get_user_model().objects.filter(id=self.request.user.id)


class OwnSnippetViewset(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SnippetSerializer
    queryset = Snippet.objects.all()

    def list(self, request, *args, **kwargs):
        return Response(SnippetSerializer(Snippet.objects.filter(author_id=self.request.user.id), many=True).data)

    def create(self, request, *args, **kwargs):
        data = json.loads(request.body)
        snippet = Snippet.objects.create(
            name=data["name"],
            language=data["language"],
            description=data["desc"],
            code=data["code"],
            author=request.user,
            snips_amount=0
        )
        return Response({
            "success": True
        })


class FeaturedSnippets(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SnippetSerializer

    def get_queryset(self):
        return Snippet.objects.order_by("snips_amount")[:30]


class AddSnip(ModelViewSet):
    permission_classes = (IsAuthenticated, )
    serializer_class = SnippetSerializer
    queryset = Snippet.objects.all()

    def create(self, request, *args, **kwargs):
        data = json.loads(request.body)
        snippet = Snippet.objects.get(id=data["snippetid"])
        snippet.snips_amount = snippet.snips_amount + 1
        snippet.snips.add(request.user)
        snippet.save()
        return Response({
            "success": True
        })


class SearchSnippet(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SnippetSerializer
    queryset = Snippet.objects.all()

    def create(self, request, *args, **kwargs):
        data = json.loads(request.body)
        search_results = Snippet.objects.filter(name__icontains=data["searchid"])[:30]
        return Response(self.serializer_class(search_results).data)
