import { NgModule } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
  ReversePipe,
  StringifyPipe
 } from './index';

@NgModule({
    declarations: [ReversePipe, StringifyPipe],
    providers: [EmployeeService, LoggerService],
    exports: [ReversePipe, StringifyPipe]
})
export class CoreModule { }
