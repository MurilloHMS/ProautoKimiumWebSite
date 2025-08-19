import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-case-sucesso',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './card-case-sucesso.component.html',
  styleUrl: './card-case-sucesso.component.scss'
})
export class CardCaseSucessoComponent {
  @Input() imagem!: string;
  @Input() titulo!: string;
  @Input() descricao!: string;
  @Input() resultado!: {texto: string}[];
  @Input() link!: string;

}
