import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pag'
})
export class PagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let pag = value.replace('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=', '');

    if(pag > 0) {
      return pag/20;
    }else{
      return "";
    }
  }
}
