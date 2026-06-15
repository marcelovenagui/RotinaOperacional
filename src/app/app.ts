import { Component } from '@angular/core';
import { Atividades } from './pages/atividades/atividades';

@Component({
  selector: 'app-root',
  imports: [Atividades],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
