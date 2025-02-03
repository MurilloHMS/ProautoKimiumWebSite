import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaseSucessoComponent } from './card-case-sucesso.component';

describe('CardCaseSucessoComponent', () => {
  let component: CardCaseSucessoComponent;
  let fixture: ComponentFixture<CardCaseSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCaseSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCaseSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
