import { Component } from '@angular/core';

@Component({
  selector: 'visitor',
  template: `
    <p *ngFor='let friend of friends;let i = index;'>
        <strong>{{i}}</strong> {{friend|uppercase}}
    </p>
  `,
})
export class VisitorComponent  { 

    friends : string[];

    styles : string[];

    constructor(){
        this.friends = ['Vamsy','Sharma','Srinu'];

        this.styles = [
            "background-color:#ff0000";color:#ffffff",
            "background-color:#00ff00";color:#ffffff",
            "background-color:#0000ff";color:#ffffff",            
        ];
    }
}