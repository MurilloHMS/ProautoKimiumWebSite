import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesSucessoComponent } from './cases-sucesso.component';

describe('CasesSucessoComponent', () => {
  let component: CasesSucessoComponent;
  let fixture: ComponentFixture<CasesSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CasesSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
