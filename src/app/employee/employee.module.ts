import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EmployeeDetailsComponent,
  EmployeeListComponent,
  EmployeeViewComponent,
} from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeViewComponent,
  ],
})
export class EmployeeModule {}
