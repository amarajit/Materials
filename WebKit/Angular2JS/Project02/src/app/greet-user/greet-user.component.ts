import { Component } from '@angular/core';
import { GreetServiceService } from 'app/greet-service.service';

@Component({
  selector: 'app-greet-user',
  templateUrl: './greet-user.component.html',
  styleUrls: ['./greet-user.component.css']
})
export class GreetUserComponent  {

  greeting : string;

  constructor(private _greetServiceService : GreetServiceService) { 
    this.greeting = this._greetServiceService.getGreeting();
   }

}
