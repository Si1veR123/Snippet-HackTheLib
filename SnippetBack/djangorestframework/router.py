from rest_framework.routers import DefaultRouter
from . viewsets import *

router = DefaultRouter()

router.register("snippet", OwnSnippetViewset, basename="ownsnippets")
router.register("profile", UserViewset, basename="profile")
router.register("featured", FeaturedSnippets, basename="featured")
router.register("snip", AddSnip)
router.register("searchsnip", SearchSnippet)

urlpatterns = router.urls
