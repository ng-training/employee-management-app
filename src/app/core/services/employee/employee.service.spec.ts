import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { of } from 'rxjs/observable/of';

import { EmployeeService } from './employee.service';
import { LoggerService } from 'app/core';

describe('EmployeeService', () => {
  let empService: EmployeeService;
  let logger, http;

  const employees = [
    {
      'id': 'ae7b7cce-57b2-4a79-ba23-4fbc170fae80',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
      'name': 'Loraine Bradford',
      'email': 'loraine.bradford@visma.com',
      'phone': '+40 (874) 400-3755',
      'address': {
        'street': 'Fenimore Street',
        'number': '325',
        'city': 'Villarreal'
      },
      'position': 'Systems developer'
    },
    {
      'id': 'cc78de91-08fb-427b-a375-a53952e19331',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/15.jpg',
      'name': 'Rosetta Bond',
      'email': 'rosetta.bond@visma.com',
      'phone': '+40 (983) 463-3282',
      'address': {
        'street': 'Gerritsen Avenue',
        'number': '622',
        'city': 'Vicksburg'
      },
      'position': 'Software Architect'
    }];

  const response = { json: () => employees };
  const singleResponse = { json: () => employees[0] };

  beforeEach(() => {
    logger = jasmine.createSpyObj('logger', [ 'log' ]);
    http = jasmine.createSpyObj('http', [ 'get', 'put' ]);

    logger.log.and.callFake(() => console.log('logger'));

    empService = new EmployeeService(logger, http);
  });

  it('should create an instance', () => {
    expect(empService).toBeTruthy();
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        EmployeeService,
        LoggerService,
      ]
    });
  });

  it('can get employees', () => {
    http.get.and.returnValue(of(response));

    empService.getEmployees()
      .subscribe(res => {
        expect(res.length).toBe(2);
      });
  });

  it('can get employee by id', () => {
    http.get.and.returnValue(of(singleResponse));

    empService.getEmployeeById('foo')
      .subscribe(res => expect(res.id).toBe(employees[0].id));
  });

  it('can update an employee', () => {
    http.put.and.returnValue(of(singleResponse));

    empService.updateEmployee(employees[1]);

    expect(http.put).toHaveBeenCalled();
  });

  it('can handle error', () => {
    http.get.and.returnValue(of({}));

    empService.getEmployees()
      .catch(err => {
        expect(err).not.toBeUndefined();
        return of({});
      })
      .subscribe(_ => console.log('done'));
  });
});
