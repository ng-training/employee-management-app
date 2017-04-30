import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
<<<<<<< HEAD
  ReversePipe
 } from './index';

@NgModule({
    declarations: [ReversePipe],
    providers: [EmployeeService, LoggerService],
    exports: [ReversePipe]
})
export class CoreModule { }
=======
} from './index';

@NgModule()
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ EmployeeService, LoggerService ]
    };
  };
}
>>>>>>> 4-module-core
