import { Component } from '@angular/core';
import { ProdutosComponent } from "../produtos/produtos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
