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

  console.log('BOTAO CLICADO');
  console.log(this.novaAtividade);

  this.atividadeService
    .salvar(this.novaAtividade)
    .subscribe(() => {

      console.log('SALVOU');

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

excluir(id: number): void {

  this.atividadeService
    .excluir(id)
    .subscribe(() => {

      this.atividadeService
        .listarTodas()
        .subscribe(dados => {
          this.atividades = dados;
        });

    });

}
editandoId: number | null = null;
editar(atividade: any): void {

  this.novaAtividade = {
    descricao: atividade.descricao,
    status: atividade.status,
    observacao: atividade.observacao
  };

  this.editandoId = atividade.id;
}
atualizar(): void {

  if (this.editandoId === null) return;

  this.atividadeService
    .atualizar(this.editandoId, this.novaAtividade)
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

      this.editandoId = null;
    });
}
}

