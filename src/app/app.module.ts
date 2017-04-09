import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
