import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from '../../../services';
import { Employee } from '../../../mock-data/employees.mock';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(
    public route: ActivatedRoute,
    public employeeService: EmployeeService,
    public router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.employeeService.getEmployeeById(id).subscribe((employee: Employee) => {
      this.employee = employee;
    });
  }

  changeAddress() {
    this.employee.address.street += '2';
  }

  save(employee: Employee) {
    employee.id = this.employee.id;
    this.employeeService.updateEmployee(employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
