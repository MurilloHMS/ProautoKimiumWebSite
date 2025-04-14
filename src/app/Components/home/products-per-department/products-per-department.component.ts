import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-products-per-department',
  standalone: true,
  imports: [TabViewModule, CarouselModule],
  templateUrl: './products-per-department.component.html',
  styleUrl: './products-per-department.component.scss'
})
export class ProductsPerDepartmentComponent {

}
