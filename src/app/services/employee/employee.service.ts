import { Injectable } from '@angular/core';
import { employees, Employee } from '../../mock-data/employees.mock';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = employees;

  getEmployees(): Employee[] {
    return this.employees;
  }
}
