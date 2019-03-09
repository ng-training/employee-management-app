import { Component } from '@angular/core';
import { employees, Employee } from '../../mock-data/employees.mock';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {
  employees: Employee[] = employees;
}
