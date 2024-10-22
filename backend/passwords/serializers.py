from rest_framework import serializers
from .models import Password

class PasswordSerializer(serializers.ModelSerializer):
    decrypted_password = serializers.SerializerMethodField()
    
    class Meta:
        model = Password
        fields = ['id', 'site_name', 'username', 'encrypted_password', 'decrypted_password']

    def get_decrypted_password(self, obj):
        return obj.decrypt_password()