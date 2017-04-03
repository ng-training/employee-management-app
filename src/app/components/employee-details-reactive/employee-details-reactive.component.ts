import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details-reactive',
  templateUrl: './employee-details-reactive.component.html',
})
export class EmployeeDetailsReactiveComponent {
  employeeName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  employeePosition = new FormControl('', [Validators.required, this.hasDigit(2, 'MustHave2')]);
  employeeSkills = new FormControl('');

  employeeDetailsForm: FormGroup = this.formBuilder.group({
    employeeName: this.employeeName,
    employeePosition: this.employeePosition,
    employeeSkills: this.employeeSkills
  });

  constructor(private formBuilder: FormBuilder) { }

   onSubmit() {
     console.log(this.employeeDetailsForm.value);
   }

   hasDigit(digit: number, error: string) {
     return function(input: FormControl) {
       return input.value.indexOf(digit) >= 0 ? null : { [error]: true };
     };
   }
}
