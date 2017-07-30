import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { EmployeeService,
         LoggerService,
         } from './shared/index';

import { EmployeeListComponent,
         SearchComponent,
         EmployeeViewComponent,
        } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    EmployeeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
