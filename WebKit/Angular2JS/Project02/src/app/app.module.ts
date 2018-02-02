import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { EventsDemoComponent } from './events-demo/events-demo.component';
import { TodayDirective } from './today.directive';
import { SkinPipe } from './skin.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { GreetServiceService } from './greet-service.service';
import { GreetUserComponent } from './greet-user/greet-user.component';
@NgModule({
  declarations: [
    AppComponent,
    BankaccountComponent,
    EventsDemoComponent,
    TodayDirective,
    SkinPipe,
    PipeDemoComponent,
    WordCountPipe,
    GreetUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GreetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
