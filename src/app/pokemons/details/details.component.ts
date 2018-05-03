import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailsService } from '../../shared';

@Component({
  selector: 'poke-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @ViewChild('loader') loader;

  sub;
  id;
  pag;
  
  pokeDetails;

  constructor( private activatedRoute: ActivatedRoute, private details: DetailsService ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.pag = localStorage.getItem('pag');

      this.details.pokeDetails(this.id).subscribe((data) => {
        let response = data.json();

        this.pokeDetails = response;

        this.loader.nativeElement.hidden = true;
      }, (error) => {
        console.log(error);
      })
    });
  }

}
