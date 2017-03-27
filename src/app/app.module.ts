import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { routes } from "./app.routes";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { EmployeesService,
         LoggerService,
         } from './shared/index';

import { EmployeeListComponent,
         SearchComponent,
        } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EmployeesService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
