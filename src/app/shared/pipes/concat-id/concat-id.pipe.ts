import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatId'
})
export class ConcatIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let concat = value.split('/').reverse();
    return concat[1];
  }

}
