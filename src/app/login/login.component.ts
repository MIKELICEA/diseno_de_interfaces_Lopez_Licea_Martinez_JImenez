import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  // Valores de ejemplo para la autenticación
  correctUsername: string = 'usuario@example.com';
  correctPassword: string = '12345';

  constructor(private router: Router) {}

  onLogin(): void {
    if (this.username === this.correctUsername && this.password === this.correctPassword) {
      this.router.navigate(['/dashboard-cursos']); // Redireccionar al dashboard
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
