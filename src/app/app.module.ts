import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { PageNotFoundComponent } from './components';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), EmployeeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
