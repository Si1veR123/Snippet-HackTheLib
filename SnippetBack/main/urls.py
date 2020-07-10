from django.contrib import admin
from django.urls import include, path, re_path
from . import views
import user.urls
from djangorestframework import router
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/", include(router)),
    path("auth/", include(user.urls.urlpatterns)),
    re_path(r'.*', views.main)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
