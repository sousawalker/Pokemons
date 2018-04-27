import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class DetailsService {
  apiURL = environment.apiUrl;

  constructor( private http: Http ) { }

  pokeDetails( id: string ) {
    return this.http.get(this.apiURL+'/'+id);
  }
}
