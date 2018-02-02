import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skin'
})
export class SkinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
