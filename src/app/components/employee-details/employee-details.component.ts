import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../services';
import { Employee } from '../../mock-data/employees.mock';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(
    public route: ActivatedRoute,
    public employeeService: EmployeeService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employee = this.employeeService.getEmployeeById(id);
  }
}
