import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AtividadeService } from '../../services/atividade';
import { Atividade } from '../../models/atividade';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atividades.html',
  styleUrl: './atividades.css'
})
export class Atividades implements OnInit {

  atividades: Atividade[] = [];

  novaAtividade: Atividade = {
    descricao: '',
    status: 'PENDENTE',
    observacao: ''
  };

  editandoId: number | null = null;
  mostrarFormulario = false;
  filtroStatus = 'TODOS';
  busca = '';

  constructor(private atividadeService: AtividadeService) {}

  ngOnInit(): void {
    this.carregarAtividades();
  }

  carregarAtividades(): void {
    this.atividadeService.listarTodas().subscribe(dados => {
      this.atividades = dados;
    });
  }

  processando = false;

  salvar(): void {
  this.atividadeService.salvar(this.novaAtividade).subscribe({
    next: () => {
      this.carregarAtividades();
      this.limparFormulario();
      this.mostrarFormulario = false;
    },
    error: (erro) => {
      console.log('Erro ao salvar:', erro);
    }
  });
}

  editar(atividade: Atividade): void {
    this.novaAtividade = {
      descricao: atividade.descricao,
      status: atividade.status,
      observacao: atividade.observacao
    };

    this.editandoId = atividade.id ?? null;
    this.mostrarFormulario = true;
  }

  atualizar(): void {
  if (this.editandoId === null) return;

  this.atividadeService.atualizar(this.editandoId, this.novaAtividade).subscribe({
    next: () => {
      this.carregarAtividades();
      this.limparFormulario();
      this.editandoId = null;
      this.mostrarFormulario = false;
    },
    error: (erro) => {
      console.log('Erro ao atualizar:', erro);
    }
  });
}

  excluir(id: number): void {
    this.atividadeService.excluir(id).subscribe(() => {
      this.carregarAtividades();
    });
  }

  limparFormulario(): void {
    this.novaAtividade = {
      descricao: '',
      status: 'PENDENTE',
      observacao: ''
    };
  }

  get atividadesFiltradas(): Atividade[] {
    let lista = this.atividades;

    if (this.filtroStatus !== 'TODOS') {
      lista = lista.filter(a => a.status === this.filtroStatus);
    }

    if (this.busca.trim() !== '') {
      lista = lista.filter(a =>
        a.descricao.toLowerCase().includes(this.busca.toLowerCase())
      );
    }

    return lista;
  }

  get totalAtividades(): number {
    return this.atividades.length;
  }

  get totalConcluidas(): number {
    return this.atividades.filter(a => a.status === 'CONCLUIDO').length;
  }

  get totalPendentes(): number {
    return this.atividades.filter(a => a.status === 'PENDENTE').length;
  }
}