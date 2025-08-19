import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'pk-contact-button',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, ContactComponent],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss'
})
export class ContactButtonComponent {
  displayContact = false;

  @Input() label: string = 'Entrar em Contato';
  @Input() icon: string = 'pi pi-envelope';

  openContact(){
    this.displayContact = true;
  }
}
