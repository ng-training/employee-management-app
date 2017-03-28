import { NgModule } from '@angular/core';

import {
  EmployeesService,
  LoggerService,
  ReversePipe,
  ListPipe
 } from './index';

@NgModule({
    declarations: [ReversePipe, ListPipe],
    providers: [EmployeesService, LoggerService],
    exports: [ReversePipe, ListPipe]
})
export class CoreModule { }
