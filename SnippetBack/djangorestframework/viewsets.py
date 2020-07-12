from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from . serializers import *
from django.contrib.auth import get_user_model
from snippet.models import Snippet
import json
import datetime


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

    def destroy(self, request, *args, **kwargs):
        snippet = self.get_object()

        if snippet.author.id == request.user.id:
            snippet.delete()

            return Response(status=200)

        return Response(status=401)


class FeaturedSnippets(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SnippetSerializer

    def get_queryset(self):
        ordered_snippets = Snippet.objects.order_by("snips_amount")
        filtered_snippets = ordered_snippets.filter(
            date__gte=datetime.date.today() - datetime.timedelta(days=62)
        )
        return filtered_snippets


class Snipping(ModelViewSet):
    permission_classes = (IsAuthenticated, )
    serializer_class = SnippetSerializer
    queryset = Snippet.objects.all()

    def create(self, request, *args, **kwargs):
        data = json.loads(request.body)
        snippet = Snippet.objects.get(id=data["snippetid"])

        if snippet.author.id == request.user.id:
            return Response({
                "snipped": False
            })

        if snippet.snips.filter(id=request.user.id).exists():
            return Response({
                "snipped": False
            })

        snippet.snips_amount = snippet.snips_amount + 1
        snippet.snips.add(request.user)
        snippet.save()
        return Response({
            "snipped": True
        })

    def list(self, request, *args, **kwargs):
        return Response(SnippetSerializer(
            Snippet.objects.filter(snips=request.user),
            many=True
        ).data)


class SearchSnippet(ModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = SnippetSerializer
    queryset = Snippet.objects.all()

    def list(self, request, *args, **kwargs):
        search_results = Snippet.objects.filter(name__icontains=request.GET.get("searchid"))[:30]
        return Response(SnippetSerializer(search_results, many=True).data)

