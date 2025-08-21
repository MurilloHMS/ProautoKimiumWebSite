import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { LoginComponent } from './components/login/login.component';
import { NossaEquipeComponent } from './components/nossa-equipe/nossa-equipe.component';
import { InstitucionalComponent } from './components/institucional/institucional.component';
import { SalesCertificatesComponent } from './components/sales-certificates/sales-certificates.component';
import { FaqComponent } from './components/faq/faq.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'nossaEquipe', component: NossaEquipeComponent, pathMatch: 'full'},
    { path: 'about-us', component: EmpresaComponent, pathMatch: 'full'},
    { path: 'carrinho', component: CarrinhoComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'produtos/lista', component: ListaProdutosComponent, pathMatch: 'full'},
    { path: '404', component: NotFoundComponent},
    { path: 'privacy-policy', component: InstitucionalComponent, pathMatch: 'full'},
    { path: 'sales/documents/certificates', component: SalesCertificatesComponent, pathMatch: 'full'},
    { path: 'support/faq', component: FaqComponent, pathMatch: 'full'},
    { path: '**', redirectTo: '404'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
