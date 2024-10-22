from rest_framework import viewsets
from .models import Password
from .serializers import PasswordSerializer

class PasswordViewSet(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer

    # Override the create method to handle encryption
    def perform_create(self, serializer):
        password = serializer.validated_data.get('encrypted_password')
        instance = serializer.save()
        instance.encrypt_password(password)
        instance.save()

    # Override the update method to handle password encryptio
    def perform_update(self, serializer):
        password = serializer.validated_data.get('encrypted_password')
        instance = serializer.save()
        instance.encrypt_password(password)  # Encrypt the updated password
        instance.save()