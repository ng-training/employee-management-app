import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
  ReversePipe
 } from './index';

@NgModule({
    declarations: [ReversePipe],
    exports: [ReversePipe]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ EmployeeService, LoggerService ]
    };
  };
}
