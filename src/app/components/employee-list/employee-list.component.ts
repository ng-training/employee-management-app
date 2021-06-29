import { Component, OnInit } from '@angular/core';
import { Employee } from '../../mock-data/employees.mock';
import { EmployeeService } from '../../services';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  initialEmployees: Employee[];
  employees: Employee[];

  constructor(private employeesService: EmployeeService) {}

  ngOnInit(): void {
    this.initialEmployees = this.employeesService.getEmployees();
    this.employees = this.initialEmployees;
  }

  filterEmployees(text: string) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText
      ? this.initialEmployees.filter((e) =>
          e.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        )
      : this.initialEmployees;
  }
}
