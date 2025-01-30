import { Component } from '@angular/core';
import { categorias, produtos } from '../../../Type/produtos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.scss'
})
export class ListaProdutosComponent {
  categorias = categorias;
  produtos = produtos;
  produtosKeys = Object.keys(produtos);

}
