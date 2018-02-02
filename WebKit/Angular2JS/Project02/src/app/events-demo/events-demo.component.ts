import { Component } from '@angular/core';

@Component({
  selector: 'app-events-demo',
  templateUrl: './events-demo.component.html',
  styleUrls: ['./events-demo.component.css']
})
export class EventsDemoComponent  {

  message : string;
  constructor() {
    this.message="no event happend in this part.";
   }

   handleMouseEnter(){
    this.message="Mouse Entered";
  }
  handleMouseLeave(){
    this.message="Mouse Left";
  }
}
