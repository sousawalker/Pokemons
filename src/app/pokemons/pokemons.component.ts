import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../shared';

@Component({
  selector: 'poke-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  pokeList;
  count;

  prev;
  next;

  sub;
  pag;

  constructor( private activatedRoute: ActivatedRoute, private list: ListService ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.pag = params['pag'];

      localStorage.setItem('pag', this.pag);

      this.list.pokeList(this.pag).subscribe((data) => {
        let response = data.json();

        this.prev = response.previous;
        this.next = response.next;

        this.pokeList = response.results;
      }, (error) => {
        console.log(error);
      })
    });
  }
}
