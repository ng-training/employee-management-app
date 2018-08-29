import { NgModule, ModuleWithProviders } from '@angular/core';

import {
  EmployeeService,
  LoggerService,
  ReversePipe,
  PadLeftPipe
} from './index';

@NgModule({
  declarations: [ReversePipe, PadLeftPipe],
  exports: [ReversePipe, PadLeftPipe]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [EmployeeService, LoggerService]
    };
  }
}
