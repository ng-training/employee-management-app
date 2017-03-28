import { NgModule } from '@angular/core';

import {
  EmployeesService,
  LoggerService,
  ReversePipe
 } from './index';

@NgModule({
    declarations: [ReversePipe],
    providers: [EmployeesService, LoggerService],
    exports: [ReversePipe]
})
export class CoreModule { }
