import { Component } from '@angular/core';

@Component({
  selector: 'visitor',
  template: `
  <table>
    <tr><td><strong>Full Name</strong></td>
        <td>{{salutation}} {{firstName}} {{lastName}}</td></tr>
    <tr><td><strong>Date Of Birth</strong></td>
        <td>{{dateOfBirth}}</td></tr>
    <tr><td><strong>Marital Status</strong></td>
        <td>{{isMarried?'Married':'UnMarried'}}</td></tr>
  </table>
  `,
})
export class VisitorComponent  { 
    salutation : string;
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
    isMarried : boolean;

    constructor(){
        this.salutation='Mr.';
        this.firstName='Vamsy Kiran';
        this.lastName='A';
        this.dateOfBirth=new Date("1985-06-11");
        this.isMarried=true;
    }
}
