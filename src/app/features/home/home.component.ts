import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProdutosComponent } from "../../Components/produtos/produtos.component";
import { ServicosComponent } from "../../Components/servicos/servicos.component";
import { TimelineComponent } from "../../Components/home/timeline/timeline.component";
import { CarouselComponent } from "../../Components/home/carousel/carousel.component";
import { ProductsPerDepartmentComponent } from "../../Components/home/products-per-department/products-per-department.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ConsultoriaComponent } from "./components/consultoria/consultoria.component";
import { ProcessoConsultoriaComponent } from "./components/processo-consultoria/processo-consultoria.component";
import { MotivosContratarComponent } from "./components/motivos-contratar/motivos-contratar.component";
import { ServicosEProdutosComponent } from "./components/servicos-eprodutos/servicos-eprodutos.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent, ServicosComponent, TimelineComponent, CarouselComponent, ProductsPerDepartmentComponent, HeroComponent, ConsultoriaComponent, ProcessoConsultoriaComponent, MotivosContratarComponent, ServicosEProdutosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
