/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService } from '../../core/services/employee/employee.service';
import { LoggerService } from '../../core/services/logger/logger.service';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { EmployeeViewComponent } from 'app/components';
import { SharedModule } from 'app/shared/shared.module';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        EmployeeListComponent,
        EmployeeViewComponent,
      ],
      providers: [
        EmployeeService,
        LoggerService,
      ],
      imports: [
        RouterTestingModule,
        RouterModule,
        SharedModule,
        HttpModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
