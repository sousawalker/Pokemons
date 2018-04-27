import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  DetailsService,
  Details
} from '../../shared';

@Component({
  selector: 'poke-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  sub;
  id;
  
  pokeDetails = Details;

  constructor( private activatedRoute: ActivatedRoute, private details: DetailsService ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.details.pokeDetails(this.id).subscribe((data) => {
        let response = data.json();

        this.pokeDetails = response;
      }, (error) => {
        console.log(error);
      })
    });
  }

}
