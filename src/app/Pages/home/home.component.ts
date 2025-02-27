import { Component } from '@angular/core';
import { ProdutosComponent } from "../../Components/produtos/produtos.component";
import { ServicosComponent } from "../../Components/servicos/servicos.component";
import { TimelineComponent } from "../../Components/home/timeline/timeline.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent, ServicosComponent, TimelineComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
