import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade } from '../models/atividade';

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private apiUrl = 'http://localhost:8080/atividades';

  constructor(private http: HttpClient) {}

  listarTodas(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(this.apiUrl);
  }

  salvar(atividade: Atividade): Observable<Atividade> {
    return this.http.post<Atividade>(this.apiUrl, atividade);
  }

  atualizar(id: number, atividade: Atividade): Observable<Atividade> {
    return this.http.put<Atividade>(`${this.apiUrl}/${id}`, atividade);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}