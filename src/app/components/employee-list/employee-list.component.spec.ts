/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpModule } from '@angular/http';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeService, employees } from '../../core/services/employee/employee.service';
import { LoggerService } from '../../core/services/logger/logger.service';
import { Observable } from 'rxjs/Observable';

import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeViewComponent } from '../employee-view/employee-view.component';

import { Router, RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';

import 'rxjs/add/observable/from';
import { APP_BASE_HREF } from '@angular/common';

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
        {provide: APP_BASE_HREF, useValue : '/' },
      ],
      imports: [
        RouterModule.forRoot([{path: '', component: EmployeeListComponent}]),
        RouterTestingModule,
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
    spyOn(employeeService, 'getEmployees').and.returnValue(Observable.from([employees]).debounceTime(100));
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the employees list',
    async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.employees instanceof Array).toBeTruthy();
        expect(component.employees.length).toBe(10);
      });
    })
  );

  it('should load the employees list (fakeAsync)',
    fakeAsync(() => {
      fixture.detectChanges();
      tick();
      expect(component.employees instanceof Array).toBeTruthy();
      expect(component.employees.length).toBe(10);
    })
  );
});

describe('EmployeeListComponent with stub', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  const employeeServiceStub = {
    getEmployees() {
      return Observable.from([employees]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent, EmployeeViewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: EmployeeService,
        useValue: employeeServiceStub
      },
      { provide: Router, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load the employees list',
    async(() => {
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const firstItem = fixture.debugElement.query(By.css('.employee-list .list-group-item:first-child h4'));
        expect(component.employees instanceof Array).toBeTruthy();
        expect(component.employees.length).toBe(10);
        expect(firstItem.nativeElement.textContent).toBe('Loraine Bradford');
      });
    })
  );

  it('should load the employees list (fakeAsync)',
    fakeAsync(() => {
      fixture.detectChanges();
      tick();
      expect(component.employees instanceof Array).toBeTruthy();
      expect(component.employees.length).toBe(10);
    })
  );
});
