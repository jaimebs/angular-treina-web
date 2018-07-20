import { DetalheComponent } from './pokemon/detalhe/detalhe.component';
import { ListaComponent } from './pokemon/lista/lista.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon/lista', pathMatch: 'full' },
  { path: 'pokemon/lista', component: ListaComponent },
  { path: 'pokemon/detalhe/:id/:nome', component: DetalheComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RotasModule { }
