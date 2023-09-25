import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProdDetalhiComponent } from './prod-detalhi/prod-detalhi.component';
import { FinalizarComponent } from './finalizar/finalizar.component';
import { ContatoComponent } from './contato/contato.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { AcountComponent } from './acount/acount.component';
import { NewsComponent } from './news/news.component';
import { NewsDComponent } from './news-d/news-d.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'log',
    component: LoginComponent,
  }, {
    path: 'aco',
    component: AcountComponent,
  },
  {
    path: 'p',
    component: ProdutosComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'detail',
    component: ProdDetalhiComponent,
  },
  {
    path: 'fin',
    component: FinalizarComponent,
  },
  {
    path: 'con',
    component: ContatoComponent,
  },
  {
    path: 'serv',
    component: ServiceComponent,
  },
  {
    path: 'new',
    component: NewsComponent,
  },
  {
    path: 'nd',
    component: NewsDComponent,
  },
   {
    path: 'pro',
    component: ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
