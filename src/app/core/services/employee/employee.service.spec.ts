import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { EmployeeService } from './employee.service';
import { LoggerService } from '../logger/logger.service';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, LoggerService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
