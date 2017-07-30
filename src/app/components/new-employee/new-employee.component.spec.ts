import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EmployeeService, LoggerService } from 'app/core';
import { NewEmployeeComponent } from './new-employee.component';

describe('NewEmployeeComponent', () => {
  let component: NewEmployeeComponent;
  let fixture: ComponentFixture<NewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewEmployeeComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule,
        HttpModule,
      ],
      providers: [
        EmployeeService,
        LoggerService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an invalid form', () => {
    expect(component.employeeDetailsForm.invalid).toBe(true);
  });

  it('should validate form', () => {
    component.name.setValue('Lucian');
    component.position.setValue('dev2');
    component.email.setValue('luci@visma.com');
    expect(component.employeeDetailsForm.valid).toBe(true);
  });
});
