import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { VisitorComponent }  from './myComponents/visitor.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,VisitorComponent ],
  bootstrap:    [ AppComponent,VisitorComponent ]
})
export class AppModule { }
