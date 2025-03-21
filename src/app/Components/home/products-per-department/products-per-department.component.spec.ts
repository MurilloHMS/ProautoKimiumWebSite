import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPerDepartmentComponent } from './products-per-department.component';

describe('ProductsPerDepartmentComponent', () => {
  let component: ProductsPerDepartmentComponent;
  let fixture: ComponentFixture<ProductsPerDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPerDepartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsPerDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
