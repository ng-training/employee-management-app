import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { EmployeeListComponent,
         PageNotFoundComponent,
         EmployeeDetailsComponent,
         EmployeeDetailsReactiveComponent,
         EmployeeViewComponent,
        } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmployeeDetailsReactiveComponent,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
