import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const autenticadoGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.estaAutenticado()){
        return true;
    }

    router.navigate(['/login']);
    return false;
}