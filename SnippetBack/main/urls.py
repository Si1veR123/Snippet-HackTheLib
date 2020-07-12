from django.contrib import admin
from django.urls import include, path, re_path
from . import views
import user.urls
from djangorestframework import router


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router)),
    path("auth/", include(user.urls.urlpatterns)),
    re_path(r'.*', views.main)
]
