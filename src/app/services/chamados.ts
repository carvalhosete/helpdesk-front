import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ChamadosService {

    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:8081/chamados';

    listarTodos(){
        return this.http.get(this.apiUrl);
    }
}