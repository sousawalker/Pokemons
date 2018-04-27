import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonsComponent } from './pokemons/pokemons.component';
import { ListComponent } from './pokemons/list/list.component';
import { DetailsComponent } from './pokemons/details/details.component';

import {
  DetailsService,
  ListService,
  ConcatIdPipe,
  UcwordsPipe,
  FooterComponent,
  PaginationComponent,
  PagPipe
} from './shared';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    ListComponent,
    DetailsComponent,
    ConcatIdPipe,
    UcwordsPipe,
    FooterComponent,
    PaginationComponent,
    PagPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    DetailsService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
