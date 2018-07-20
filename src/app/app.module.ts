import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaComponent } from './pokemon/lista/lista.component';
import { DetalheComponent } from './pokemon/detalhe/detalhe.component';
import { PokemonService } from './pokemon/pokemon.service';
import { RotasModule } from './rotas';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RotasModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
