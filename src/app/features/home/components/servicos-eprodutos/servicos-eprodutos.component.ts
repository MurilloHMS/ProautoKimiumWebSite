import { Component } from '@angular/core';
import { ServicosComponent } from "../../../../Components/servicos/servicos.component";
import { ProdutosComponent } from "../../../../Components/produtos/produtos.component";

@Component({
  selector: 'app-servicos-eprodutos',
  standalone: true,
  imports: [ServicosComponent, ProdutosComponent],
  templateUrl: './servicos-eprodutos.component.html',
  styleUrl: './servicos-eprodutos.component.scss'
})
export class ServicosEProdutosComponent {

}
