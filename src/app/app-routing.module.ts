import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PokemonsComponent,
  DetailsComponent
} from './pokemons';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path: 'pokemons/:pag',
    component: PokemonsComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
