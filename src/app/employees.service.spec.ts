import { TestBed, inject } from '@angular/core/testing';

import { EmployeesService } from './employees.service';

describe('EmployeesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService]
    });
  });

  it('should ...', inject([EmployeesService], (service: EmployeesService) => {
    expect(service).toBeTruthy();
  }));
});
