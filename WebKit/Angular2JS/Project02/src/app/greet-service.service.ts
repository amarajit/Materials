import { Injectable } from '@angular/core';

@Injectable()
export class GreetServiceService {

  constructor() { }

  getGreeting() : string{
    var greeting : string="";

    var hour : number = (new Date()).getHours();

    if(hour<=10){
      greeting="Good Morning ";
    } else if(hour<=15){
      greeting="Good After Noon ";
    } else if(hour<=21){
      greeting="Good Evening ";
    }else{
      greeting="Good Night ";
    }
    return greeting;
  }

}
