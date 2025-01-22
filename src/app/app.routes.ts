import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContatoComponent } from './contato/contato.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'clientes', component: ClientesComponent, pathMatch: 'full'},
    { path: 'empresa', component: EmpresaComponent, pathMatch: 'full'},
    { path: 'contato', component: ContatoComponent, pathMatch: 'full'},
    { path: 'carrinho', component: CarrinhoComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'produtos', component: ProdutosComponent, pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
