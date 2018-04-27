import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})
export class UcwordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( value == "Details" ) return null;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
