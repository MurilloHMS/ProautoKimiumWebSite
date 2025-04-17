import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProdutosComponent } from "../../Components/produtos/produtos.component";
import { ServicosComponent } from "../../Components/servicos/servicos.component";
import { TimelineComponent } from "../../Components/home/timeline/timeline.component";
import { CarouselComponent } from "../../Components/home/carousel/carousel.component";
import { ProductsPerDepartmentComponent } from "../../Components/home/products-per-department/products-per-department.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProdutosComponent, ServicosComponent, TimelineComponent, CarouselComponent, ProductsPerDepartmentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
