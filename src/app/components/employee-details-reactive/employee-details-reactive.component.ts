import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details-reactive',
  templateUrl: './employee-details-reactive.component.html',
})
export class EmployeeDetailsReactiveComponent {
  employeeName = new FormControl('', [Validators.required, Validators.minLength(5)]);
  employeePosition = new FormControl('', [Validators.required]);
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
}
