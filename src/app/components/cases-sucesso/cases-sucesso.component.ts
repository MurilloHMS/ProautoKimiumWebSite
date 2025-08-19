import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardCaseSucessoComponent } from '../../shared/card-case-sucesso/card-case-sucesso.component';

@Component({
  selector: 'app-cases-sucesso',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CardCaseSucessoComponent],
  templateUrl: './cases-sucesso.component.html',
  styleUrl: './cases-sucesso.component.scss'
})
export class CasesSucessoComponent {

}
