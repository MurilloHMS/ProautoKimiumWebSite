import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'
import { ArgumentOutOfRangeError } from 'rxjs';

interface TipoContato{
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, InputTextModule,
    InputTextareaModule, DropdownModule, ButtonModule, ProgressSpinnerModule,
    ToastModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent {
  form: FormGroup;
  isLoading = false;
  tiposContato: TipoContato[] =[
    { label: 'Dúvida sobre produtos', value: 'DuvidaProduto' },
    { label: 'Suporte técnico', value: 'SuporteTecnico' },
    { label: 'Solicitação de orçamento', value: 'SolicitacaoOrcamento' },
    { label: 'Representação comercial', value: 'RepresentacaoComercial' },
    { label: 'Trabalhe conosco', value: 'TrabalheConosco' },
    { label: 'Consultoria especializada', value: 'ConsultoriaEspecializada' },
    { label: 'Agendar visita técnica', value: 'VisitaTecnica' },
    { label: 'Informações sobre certificações', value: 'InformacoesCertificacoes' },
    { label: 'Problemas com pedido ou entrega', value: 'ProblemaPedidoEntrega' },
    { label: 'Outros', value: 'Outros' }
  ];

  constructor(private fb: FormBuilder,
    private http: HttpClient, 
    private messageService: MessageService
  ){
    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomeEmpresa: ['', Validators.required],
      tipoContato: ['', Validators.required],
      outro: [''],
      mensagem: ['', Validators.required]
    });
  }

  submit(){
    if(this.form.invalid){
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Existem campos obrigatórios não preenchidos'});
      return;
    }

    const contato = {
      ...this.form.value,
      statusContato: 'NaoContatado',
      dataSolicitadoContato: new Date().toISOString()
    };

    this.isLoading = true;
    this.http.post('api/contato', contato, {responseType: 'text' }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: res});
        this.form.reset();
      },
      error: (err) =>{
        this.isLoading = false;
        this.messageService.add({severity: 'error', summary: 'Error', detail: err.message})
      }
    });
  }
}
