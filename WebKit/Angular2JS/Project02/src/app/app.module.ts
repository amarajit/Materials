import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { EventsDemoComponent } from './events-demo/events-demo.component';
import { TodayDirective } from './today.directive';
import { SkinPipe } from './skin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankaccountComponent,
    EventsDemoComponent,
    TodayDirective,
    SkinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
