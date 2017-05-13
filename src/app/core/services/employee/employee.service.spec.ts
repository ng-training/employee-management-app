import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { EmployeeService } from './employee.service';
import { LoggerService } from 'app/core';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        EmployeeService,
        LoggerService,
      ]
    });
  });

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
