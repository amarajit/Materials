import { Component } from '@angular/core';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bankaccount.component.html',
  styleUrls: ['./bankaccount.component.css']
})
export class BankaccountComponent {
  principle : number;
  rateOfInterest : number;
  timePeriod : number;
  si : number;
  amount : number;
  constructor() { 
    this.principle=0;
    this.rateOfInterest=0;
    this.timePeriod=0;
    this.amount=0;
  }

  compute()  {
    this.si = (this.principle*this.rateOfInterest*this.timePeriod)/100;
    this.amount=this.si+this.principle;
  }
}
