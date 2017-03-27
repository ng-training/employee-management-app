import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { CoreModule } from './core/core.module';

import { EmployeeListComponent,
         SearchComponent,
         PageNotFoundComponent,
         EmployeeDetailsComponent,
        } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
