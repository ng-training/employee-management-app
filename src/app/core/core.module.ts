import { NgModule } from '@angular/core';

import { EmployeeService,
         LoggerService,
 } from './index';

@NgModule({
    providers: [EmployeeService, LoggerService]
})
export class CoreModule { }
