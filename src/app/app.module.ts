import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';

import {
  EmployeeListComponent,
  PageNotFoundComponent,
  EmployeeDetailsComponent,
  EmployeeViewComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmployeeViewComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
