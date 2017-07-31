/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeViewComponent } from 'app/components';
import {
  EmployeeService,
  LoggerService,
} from 'app/core';
import { SharedModule } from 'app/shared/shared.module';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        HttpClientModule,
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
