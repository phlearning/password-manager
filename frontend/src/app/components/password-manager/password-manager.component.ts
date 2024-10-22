import { Component, OnInit } from '@angular/core';
import { Password } from '../../models/password';
import { PasswordService } from '../../services/password.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-password-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-manager.component.html',
  styleUrl: './password-manager.component.scss'
})
export class PasswordManagerComponent {
  passwords: Password[] = [];
  newPassword: Password = { site_name: '', username: '', encrypted_password: '' };
  editMode: boolean = false;
  editPasswordId: number = -1;

  constructor(private passwordService: PasswordService) {}

  ngOnInit(): void {
    this.loadPasswords();
  }

  loadPasswords(): void {
    this.passwordService.getPasswords().subscribe(data => {
      this.passwords = data;
    });
  }

  addPassword(): void {
    if (this.newPassword.site_name && this.newPassword.username && this.newPassword.encrypted_password) {
      this.passwordService.addPassword(this.newPassword).subscribe(() => {
        this.loadPasswords();
        this.newPassword = { site_name: '', username: '', encrypted_password: '' }; // Reset the form
      });
    }
  }

  enableEdit(password: Password): void {
    this.editMode = true;
    this.editPasswordId = password.id || -1;
    this.newPassword = { ...password }; // Load the password for editing
  }

  updatePassword(): void {
    if (this.editPasswordId !== null) {
      this.passwordService.updatePassword(this.editPasswordId, this.newPassword).subscribe(() => {
        this.loadPasswords();
        this.cancelEdit();
      });
    }
  }

  deletePassword(id: number): void {
    this.passwordService.deletePassword(id).subscribe(() => {
      this.loadPasswords();
    });
  }

  cancelEdit(): void {
    this.editMode = false;
    this.editPasswordId = -1;
    this.newPassword = { site_name: '', username: '', encrypted_password: '' }; // Reset the form
  }
}
