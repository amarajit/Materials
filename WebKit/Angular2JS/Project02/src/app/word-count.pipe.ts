import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount'
})
export class WordCountPipe implements PipeTransform {

  text : string;

  transform(value: any, args?: any): any {
    var count=0;
    var i;

    this.text = value;
    for(i=0;i<this.text.length;i++){
      if(this.text.charAt(i)==' ')
        count++;
    }
    return count;
  }

}
