import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meu-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss'
})
export class MeuComponenteComponent {
  tchauMundo = 'Tchau, mundo!'
  alunos = [
    { nome: 'Carol', idade: 20, empresa: 'Microsoft', salario: 10000},
    { nome: 'Maria', idade: 22, empresa: 'Google', salario: 5000},
    { nome: 'José', idade: 23, empresa: 'Apple', salario: 8000}
  ]
}
