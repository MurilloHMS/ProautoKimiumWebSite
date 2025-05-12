import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CarrinhoComponent } from './features/carrinho/carrinho.component';
import { CasesSucessoComponent } from './features/cases-sucesso/cases-sucesso.component';
import { ContatoComponent } from './features/contato/contato.component';
import { EmpresaComponent } from './features/empresa/empresa.component';
import { HomeComponent } from './features/home/home.component';
import { ListaProdutosComponent } from './features/lista-produtos/lista-produtos.component';
import { LoginComponent } from './features/login/login.component';
import { NossaEquipeComponent } from './features/nossa-equipe/nossa-equipe.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'nossaEquipe', component: NossaEquipeComponent, pathMatch: 'full'},
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
