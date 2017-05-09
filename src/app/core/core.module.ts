import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
  ReversePipe,
  StringifyPipe
 } from './index';

@NgModule({
    declarations: [ReversePipe, StringifyPipe],
    exports: [ReversePipe, StringifyPipe]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [ EmployeeService, LoggerService ]
    };
  };
}
