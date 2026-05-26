import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private http = inject(HttpClient);

    private apiUrl = 'http://localhost:8080/login';

    despacharLogin(credenciais: any){
        return this.http.post(this.apiUrl, credenciais);
    }
}