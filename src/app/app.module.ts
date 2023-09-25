import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HomeComponent,
    CartComponent,
    ProdDetalhiComponent,
    FinalizarComponent,
    ContatoComponent,
    ServiceComponent,
    LoginComponent,
    AcountComponent,
    NewsComponent,
    NewsDComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
