from . viewsets import AuthViewset
from rest_framework.routers import DefaultRouter

auth_router = DefaultRouter()

auth_router.register("login", AuthViewset)
auth_router.register("signup", AuthViewset)

urlpatterns = auth_router.urls
