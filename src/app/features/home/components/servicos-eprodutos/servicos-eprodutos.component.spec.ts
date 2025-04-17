import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosEProdutosComponent } from './servicos-eprodutos.component';

describe('ServicosEProdutosComponent', () => {
  let component: ServicosEProdutosComponent;
  let fixture: ComponentFixture<ServicosEProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosEProdutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicosEProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
