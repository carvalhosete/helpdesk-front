import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  private router = inject(Router);

  credenciais = {
    email: '',
    senha: ''
  };

  fazerLogin() {
    this.authService.despacharLogin(this.credenciais).subscribe({
      next: (res: any) => {
        this.authService.salvarToken(res.token);

        this.router.navigate(['/chamados']);
      },
      error: (error: any) => {
        console.log('Falha na autenticação:', error);
      }
    });
  }
}
