import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { EmployeesService } from '../../core/index';

@Component({
  selector: 'app-employee-details-reactive',
  templateUrl: './employee-details-reactive.component.html',
})
export class EmployeeDetailsReactiveComponent implements OnInit {
  employee: any;

  employeeName: FormControl;
  employeePosition: FormControl;
  employeeDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
  ) { }

  onSubmit() {
    console.log(this.employeeDetailsForm.value);
  }

  hasDigit(digit: number, error: string) {
    return function (input: FormControl) {
      return input.value.indexOf(digit) >= 0 ? null : { [ error ]: true };
    };
  }

  ngOnInit() {
    const name = this.route.snapshot.params[ 'id' ];
    this.employee = this.employeesService.getEmployeeByName(name);

    this.setupForm();
  }

  private setupForm() {
    this.employeeName = new FormControl(this.employee.name, [ Validators.required, Validators.minLength(5) ]);
    this.employeePosition = new FormControl(this.employee.position, [ Validators.required, this.hasDigit(2, 'MustHave2') ]);

    this.employeeDetailsForm = this.formBuilder.group({
      employeeName: this.employeeName,
      employeePosition: this.employeePosition,
    });
  }
}
