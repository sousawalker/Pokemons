import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poke-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() prev;
  @Input() next;

  constructor() { }

  ngOnInit() {
  }
}
