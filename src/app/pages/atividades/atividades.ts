import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../../services/atividade';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css'
})
export class Atividades implements OnInit {

  atividades: any[] = [];

  novaAtividade = {
    descricao: '',
    status: '',
    observacao: ''
  };

  constructor(private atividadeService: AtividadeService) {}

  ngOnInit(): void {
    this.atividadeService.listarTodas().subscribe(dados => {
      this.atividades = dados;
      console.log(dados);
    });
  };

salvar(): void {

    this.atividadeService
      .salvar(this.novaAtividade)
      .subscribe(() => {

        this.atividadeService
          .listarTodas()
          .subscribe(dados => {
            this.atividades = dados;
          });

        this.novaAtividade = {
          descricao: '',
          status: '',
          observacao: ''
        };

      });

  }

}

