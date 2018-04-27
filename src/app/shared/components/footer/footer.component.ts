import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  year = this.date.getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
