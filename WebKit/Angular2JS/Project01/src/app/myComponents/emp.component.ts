import { Component } from '@angular/core';

@Component({
  selector: 'emp',
  templateUrl:'app/pages/emp.component.html',
})

export class EmpComponent  { 
    salutation : string;
    firstName : string;
    lastName : string;
    dateOfBirth : Date;
    isMarried : boolean;
    spouse : string;
    designation: string;

    possibleSalutations : string[];

    constructor(){
        this.salutation='Mr.';
        this.firstName='Vamsy Kiran';
        this.lastName='A';
        this.dateOfBirth=new Date("1985-06-11");
        this.isMarried=true;
        this.spouse='Suseela';
        this.designation='Admin';
        this.possibleSalutations = ['Mr.','Miss.','Dr.','Prof.'];
    }
}
