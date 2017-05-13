import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class Address {
  street: string;
  number: string;
  city: string;
}

export class Employee {
  id: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  position: string;
}

@Injectable()
export class EmployeeService {
  private _apiUrl = 'http://localhost:3000/api/employees';

  private _headers = new Headers({
    'Content-Type': 'application/json'
  });
  private _requestOptions = new RequestOptions({
    headers: this._headers
  });

  private defaultUserPicture = 'https://randomuser.me/api/portraits/thumb/lego/5.jpg';

  constructor(private _logger: LoggerService, private _http: Http) { }

  getEmployees(): Observable<Employee[]> {
    this._logger.log('Get employees');

    return this._http.get(this._apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEmployeeById(id: string): Observable<Employee> {
    this._logger.log(`Get employee ${id}`);

    return this._http.get(`${this._apiUrl}/${encodeURIComponent(id)}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addEmployee(employee: Employee) {
    employee.picture = this.defaultUserPicture;
    if (!employee.address) {
      employee.address = <Address>{};
    }

    return this._http.post(this._apiUrl, employee)
      .catch(this.handleError);
    }

  updateEmployee(employee: Employee): Observable<Employee> {
    this._logger.log(`Get employee ${employee.id}`);

    return this._http.put(`${this._apiUrl}/${encodeURIComponent(employee.id)}`, employee, this._requestOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(response: Response): Employee[] {
    return response.json();
  }

  handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
