import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() pokeList;
  
  @Input() prev;
  @Input() next;

  constructor() { }

  ngOnInit() {
  }

}
