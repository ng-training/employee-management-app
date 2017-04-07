import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeeService } from '../../shared/index';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(public route: ActivatedRoute, public employeeService: EmployeeService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.employee = this.employeeService.getEmployeeById(id);
  }
}
