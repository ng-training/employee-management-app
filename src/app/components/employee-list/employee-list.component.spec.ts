/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeViewComponent } from '../../components/employee-view/employee-view.component';

import {
  EmployeeService,
  LoggerService,
} from 'app/core';
import { SharedModule } from 'app/shared/shared.module';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeService: EmployeeService;

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

    employeeService = fixture.debugElement.injector.get(EmployeeService);
    spyOn(employeeService, 'getEmployees').and.returnValue(Observable.from([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
