import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from "../../Components/home/carousel/carousel.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ConsultoriaComponent } from "./components/consultoria/consultoria.component";
import { ProcessoConsultoriaComponent } from "./components/processo-consultoria/processo-consultoria.component";
import { MotivosContratarComponent } from "./components/motivos-contratar/motivos-contratar.component";
import { ServicosEProdutosComponent } from "./components/servicos-eprodutos/servicos-eprodutos.component";
import { ServicosOfertadosComponent } from "./components/servicos-ofertados/servicos-ofertados.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, HeroComponent, ConsultoriaComponent, ProcessoConsultoriaComponent, MotivosContratarComponent, ServicosEProdutosComponent, ServicosOfertadosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
