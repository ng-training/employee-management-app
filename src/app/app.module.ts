import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { routes } from './app.routes';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { EmployeeListComponent,
         PageNotFoundComponent,
         EmployeeDetailsComponent,
         EmployeeViewComponent,
        } from './components/index';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
<<<<<<< HEAD
    CoreModule,
    SharedModule,
=======
    CoreModule.forRoot(),
>>>>>>> 4-module-core
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
