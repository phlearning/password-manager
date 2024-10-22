import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordManagerComponent } from './components/password-manager/password-manager.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
