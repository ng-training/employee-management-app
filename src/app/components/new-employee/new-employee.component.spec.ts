import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { EmployeeService, LoggerService } from 'app/core';
import { NewEmployeeComponent } from './new-employee.component';

describe('EmployeeDetailsReactiveComponent', () => {
  let component: NewEmployeeComponent;
  let fixture: ComponentFixture<NewEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEmployeeComponent ],
      imports: [
          ReactiveFormsModule,
          RouterTestingModule,
          RouterModule,
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
});
