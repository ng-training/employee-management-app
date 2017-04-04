import { NgModule } from '@angular/core';

import {
  EmployeesService,
  LoggerService,
  ReversePipe,
  StringifyPipe
 } from './index';

@NgModule({
    declarations: [ReversePipe, StringifyPipe],
    providers: [EmployeesService, LoggerService],
    exports: [ReversePipe, StringifyPipe]
})
export class CoreModule { }
