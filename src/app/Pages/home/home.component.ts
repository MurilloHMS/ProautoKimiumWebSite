import { Component } from '@angular/core';
import { ProdutosComponent } from "../../Components/produtos/produtos.component";
import { ServicosComponent } from "../../Components/servicos/servicos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent, ServicosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
