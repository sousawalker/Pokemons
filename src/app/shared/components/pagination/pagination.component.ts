import { Component, OnInit, Input } from '@angular/core';
import { PagPipe } from '../../pipes';

@Component({
  selector: 'poke-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() prev;
  @Input() next;

  constructor( private pipe: PagPipe ) { }

  ngOnInit() {
  }

  prevNext(url) {
    let pag = this.pipe.transform(url);

    if(pag > 0) {
      location.href = "/pokemons/"+pag;
    }else{
      location.href = "/pokemons/";
    }
  }
}
