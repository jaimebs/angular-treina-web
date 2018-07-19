import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { ListaComponent } from './pokemon/lista/lista.component';
import { DetalheComponent } from './pokemon/detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteComponent,
    ListaComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
