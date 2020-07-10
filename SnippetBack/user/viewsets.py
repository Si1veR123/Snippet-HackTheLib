from rest_framework.viewsets import ModelViewSet
from django.contrib.auth import get_user_model
from djangorestframework.serializers import UserSerializer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authentication import authenticate
from django.db.utils import IntegrityError
import json


class AuthViewset(ModelViewSet):
    queryset = get_user_model().objects
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        data = json.loads(json.loads(request.body)["data"])
        if data.get("email", False):
            # signup, as email is present (email isn't used in login)
            try:
                user = get_user_model().objects.create_user(
                    username=data["username"],
                    email=data["email"],
                    password=data["password"]
                )
            except IntegrityError:
                return Response({
                    "success": False,
                    "info": "Username is taken"
                })
            token = Token.objects.create(user=user)
            return Response({
                "success": True,
                "token": token.key
            })
        else:
            user = authenticate(username=data["username"], password=data["password"])
            if user:
                token = Token.objects.get(user=user)
                return Response({
                    "success": True,
                    "token": token.key
                })
            else:
                return Response({
                    "success": False,
                })
