import { NgModule } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
  ReversePipe
 } from './index';

@NgModule({
    declarations: [ReversePipe],
    providers: [EmployeeService, LoggerService],
    exports: [ReversePipe]
})
export class CoreModule { }
