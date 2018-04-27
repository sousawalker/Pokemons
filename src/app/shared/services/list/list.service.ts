import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ListService {
  apiURL = environment.apiUrl;

  constructor( private http: Http ) { }

  pokeList(pag?) {
    if(pag) {
      return this.http.get(this.apiURL+"/?limit=20&offset="+(pag*20));
    }

    return this.http.get(this.apiURL);
  }
}
