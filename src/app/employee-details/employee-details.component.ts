import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeesService } from "../shared/index";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public route: ActivatedRoute, public employeesService: EmployeesService) { }

  employee: any;

  ngOnInit() {
    let name = this.route.snapshot.params["id"];

    this.employee = this.employeesService.getEmployeeByName(name);
  }
}
