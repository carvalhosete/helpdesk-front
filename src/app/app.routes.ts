import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Chamados } from './pages/chamados/chamados';
import { autenticadoGuard } from './guards/auth';

export class AppRoutes { }

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
    {
      path: 'chamados', 
      component: Chamados,
      canActivate: [autenticadoGuard] 
    }
];
