import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { VisitorComponent }  from './myComponents/visitor.component';
import { EmpComponent }  from './myComponents/emp.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,VisitorComponent,EmpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
