import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../core/index';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(public route: ActivatedRoute, public employeesService: EmployeesService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.employee = this.employeesService.getEmployeeById(id);
  }

  changeAddress() {
    this.employee.address.street += "2";
  }
}
