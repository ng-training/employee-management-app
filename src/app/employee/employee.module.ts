import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EmployeeDetailsComponent,
  EmployeeListComponent,
  EmployeeViewComponent,
  NewEmployeeComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeViewComponent,
    NewEmployeeComponent,
  ],
})
export class EmployeeModule {}
