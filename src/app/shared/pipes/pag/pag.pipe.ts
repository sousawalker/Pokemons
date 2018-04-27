import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pag'
})
export class PagPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let pag = value.replace('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=', '');
    
    return pag/20;
  }
}
