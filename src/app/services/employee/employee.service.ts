import { Injectable } from '@angular/core';
import { employees, Employee } from '../../mock-data/employees.mock';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = employees;

  constructor(private logger: LoggerService) {}

  getEmployees(): Employee[] {
    this.logger.log('Get employees');

    return this.employees;
  }
}
