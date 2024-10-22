from rest_framework.routers import DefaultRouter
from .views import PasswordViewSet

router = DefaultRouter()
router.register(r'passwords', PasswordViewSet)

urlpatterns = router.urls
