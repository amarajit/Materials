import { Component} from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {

  text : string;
  num : number;
  dt : Date;

  constructor() {
    this.text = 'Hello This is a string to test string related pipes';
    this.num=2345.609;
    this.dt = new Date();
  }

}
