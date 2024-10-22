from django.db import models
from cryptography.fernet import Fernet
import os

# Create your models here.
encryption_key = os.environ.get('ENCRYPTION_KEY') or b'wBSlTxdsXHfWoFJ62q-PITikZ87t-tszpp1keBi7pRs='

class Password(models.Model):
    site_name = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    encrypted_password = models.TextField()

    def __str__(self):
        return self.site_name

    # Encrypt the password before saving it
    def encrypt_password(self, raw_password):
        cipher_suite = Fernet(encryption_key)
        self.encrypted_password = cipher_suite.encrypt(raw_password.encode()).decode()

    # Decrypt the password when retrieving it
    def decrypt_password(self):
        cipher_suite = Fernet(encryption_key)
        return cipher_suite.decrypt(self.encrypted_password.encode()).decode()

