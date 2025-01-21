import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContatoComponent } from './contato/contato.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "/produtos", component: ProdutosComponent},
    { path: "/clientes", component: ClientesComponent},
    { path: "/empresa", component: EmpresaComponent},
    { path: "/contato", component: ContatoComponent},
    { path: "/carrinho", component: CarrinhoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
