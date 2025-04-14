import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './Pages/home/home.component';
import { ClientesComponent } from './Pages/clientes/clientes.component';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { ContatoComponent } from './Pages/contato/contato.component';
import { CarrinhoComponent } from './Pages/carrinho/carrinho.component';
import { LoginComponent } from './Pages/login/login.component';
import { ListaProdutosComponent } from './Pages/lista-produtos/lista-produtos.component';
import { CasesSucessoComponent } from './Pages/cases-sucesso/cases-sucesso.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'clientes', component: ClientesComponent, pathMatch: 'full'},
    { path: 'empresa', component: EmpresaComponent, pathMatch: 'full'},
    { path: 'contato', component: ContatoComponent, pathMatch: 'full'},
    { path: 'carrinho', component: CarrinhoComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'produtos/lista', component: ListaProdutosComponent, pathMatch: 'full'},
    { path:  'cases-sucesso', component: CasesSucessoComponent, pathMatch: 'full'},
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
