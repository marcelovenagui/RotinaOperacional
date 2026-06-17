import { Component } from '@angular/core';
import { Atividades } from './pages/atividades/atividades';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Atividades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}