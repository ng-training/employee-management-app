import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { EmployeeService } from '../../../services';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
})
export class NewEmployeeComponent implements OnInit {
  employee: any;

  name: FormControl;
  position: FormControl;
  email: FormControl;
  employeeDetailsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeesService: EmployeeService,
    private router: Router
  ) {}

  onSubmit() {
    const employeeToSave = this.employeeDetailsForm.value;
    this.employeesService.addEmployee(employeeToSave);

    this.router.navigateByUrl('/employees');
  }

  hasDigit(digit: number, error: string) {
    return function(input: FormControl) {
      return input.value && input.value.indexOf(digit) >= 0
        ? null
        : { [error]: true };
    };
  }

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]);
    this.position = new FormControl('', [
      Validators.required,
      this.hasDigit(2, 'MustHave2'),
    ]);
    this.email = new FormControl('', [Validators.required]);

    this.employeeDetailsForm = this.formBuilder.group({
      name: this.name,
      position: this.position,
      email: this.email,
    });
  }
}
