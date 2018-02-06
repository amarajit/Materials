import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { EventsDemoComponent } from './events-demo/events-demo.component';
import { TodayDirective } from './today.directive';
import { SkinPipe } from './skin.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { GreetServiceService } from './greet-service.service';
import { GreetUserComponent } from './greet-user/greet-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'greet', component: GreetUserComponent },
  { path: 'bank', component: BankaccountComponent },
  { path: 'event', component: EventsDemoComponent },
  { path: 'pipe', component: PipeDemoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BankaccountComponent,
    EventsDemoComponent,
    TodayDirective,
    SkinPipe,
    PipeDemoComponent,
    WordCountPipe,
    GreetUserComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GreetServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
