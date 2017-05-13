import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { EmployeeService, LoggerService } from 'app/core';
import { EmployeeDetailsReactiveComponent } from './employee-details-reactive.component';

describe('EmployeeDetailsReactiveComponent', () => {
  let component: EmployeeDetailsReactiveComponent;
  let fixture: ComponentFixture<EmployeeDetailsReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsReactiveComponent ],
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
    fixture = TestBed.createComponent(EmployeeDetailsReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
