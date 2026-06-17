import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../../services/atividade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css'
})
export class Atividades implements OnInit {

  atividades: any[] = [];

  constructor(private atividadeService: AtividadeService) {}

  ngOnInit(): void {
    this.atividadeService.listarTodas().subscribe(dados => {
      this.atividades = dados;
      console.log(dados);
    });
  }
}