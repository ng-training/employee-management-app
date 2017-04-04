import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../core/index';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {

  private _employees: Array<any>;
  employees: Array<any>;

  constructor(private employeesService: EmployeesService) {
    this._employees = employeesService.getEmployees();
    this.employees = this._employees;
  }

  filterEmployees(text: string) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText ? this._employees.filter(e => e.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) : this._employees;
  }
}
