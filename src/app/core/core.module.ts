import { NgModule } from '@angular/core';

import { EmployeesService,
         LoggerService,
 } from './index';
import { ReversePipe } from "./pipes/reverse/reverse.pipe";

@NgModule({
    declarations: [ReversePipe],
    providers: [EmployeesService, LoggerService],
    exports: [ReversePipe]
})
export class CoreModule { }
