import { Component, OnInit } from '@angular/core';
import { employees, Employee } from '../../mock-data/employees.mock';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  initialEmployees: Employee[] = employees;
  employees: Employee[] = [];

  ngOnInit(): void {
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
