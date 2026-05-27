import { Component, OnInit, inject } from '@angular/core';
import { ChamadosService } from '../../services/chamados';

@Component({
  selector: 'app-chamados',
  standalone: true,
  imports: [],
  templateUrl: './chamados.html',
  styleUrl: './chamados.css'
})
export class Chamados implements OnInit {
  
  private chamadosService = inject(ChamadosService);

  listaDeChamados: any[] = [];

  ngOnInit(): void{
    this.carregarChamados();
  }

  carregarChamados(){
    this.chamadosService.listarTodos().subscribe({
      next: (dados: any) => {
        this.listaDeChamados = dados;
        console.log('Chamados carregados do MongoDB:', this.listaDeChamados);
      },
      error: (error: any) => {
        console.log('Erro ao buscar chamados do Resource Server:', error);
      }
    });
  }
}