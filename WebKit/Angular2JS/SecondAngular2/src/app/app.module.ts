import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { GreetService } from "./greet.service";
import { EmployeeService } from "./employee.service";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodayDirective } from './today.directive';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';

const appRoutes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'editEmp', component: EditEmployeeComponent },
  { path: 'getEmp', component: DisplayEmployeeComponent },
  { path: 'customDir', component: CustomDirectiveDemoComponent },
  { path: 'customPipe', component: CustomPipeDemoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    DisplayEmployeeComponent,
    PageNotFoundComponent,
    TodayDirective,
    CustomDirectiveDemoComponent,
    WordCountPipe,
    CustomPipeDemoComponent
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
  providers: [GreetService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
