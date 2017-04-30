import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
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
