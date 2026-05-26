import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private authService = inject(AuthService);

  credenciais = {
    email: '',
    senha: ''
  };

  fazerLogin() {
    this.authService.despacharLogin(this.credenciais).subscribe({
      next: (res: any) => {
        console.log('Login efetuado com sucesso! Resposta do IAM:', res);
      },
      error: (error: any) => {
        console.log('Falha na autenticação:', error);
      }
    });
  }
}
