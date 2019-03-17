import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { employees, Employee, Address } from '../../mock-data/employees.mock';
import { LoggerService } from '../logger/logger.service';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = employees;
  private apiUrl = 'http://localhost:3000/api/employees';
  private defaultUserPicture =
    'https://randomuser.me/api/portraits/thumb/lego/5.jpg';

  constructor(private logger: LoggerService, private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    this.logger.log('Get employees');

    return this.http
      .get<Employee[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getEmployeeById(id: string): Employee {
    this.logger.log(`Get employee ${id}`);
    return this.employees.find(e => e.id === id);
  }

  addEmployee(employee: Employee) {
    employee.picture = this.defaultUserPicture;
    if (!employee.address) {
      employee.address = <Address>{};
    }

    return this.http
      .post(this.apiUrl, employee)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
