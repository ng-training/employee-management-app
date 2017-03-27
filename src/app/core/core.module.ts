import { NgModule } from '@angular/core';

import { EmployeesService,
         LoggerService,
 } from './index';

@NgModule({
    providers: [EmployeesService, LoggerService]
})
export class CoreModule { }
