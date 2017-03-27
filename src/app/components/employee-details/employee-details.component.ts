import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../shared/index';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(public route: ActivatedRoute, public employeesService: EmployeesService) { }

  ngOnInit() {
    const name = this.route.snapshot.params['id'];

    this.employee = this.employeesService.getEmployeeByName(name);
  }
}
