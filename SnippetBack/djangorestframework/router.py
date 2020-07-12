from rest_framework.routers import DefaultRouter
from . viewsets import *

router = DefaultRouter()

router.register("snippet", OwnSnippetViewset, basename="snippet")
router.register("profile", UserViewset, basename="profile")
router.register("featured", FeaturedSnippets, basename="featured")
router.register("snip", Snipping)
router.register("searchsnip", SearchSnippet, basename="searchsnip")

urlpatterns = router.urls
