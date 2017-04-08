import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/index';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {

  private _employees: Array<any>;
  employees: Array<any>;

  searchStream$ = new Subject<string>();
  filterStream$ = new BehaviorSubject<boolean>(false);

  constructor(private employeeService: EmployeeService) {
    this._employees = employeeService.getEmployees();
    this.employees = this._employees;

    this.searchStream$.debounceTime(200)
                      .distinctUntilChanged()
                      .filter(s => s.length > 2)
                      .withLatestFrom(this.filterStream$)
                      .subscribe(([ searchTerm, onlyDevs ]) => this.filterEmployees(searchTerm, onlyDevs));
  }

  filterEmployees(text: string, onlyDevs: boolean) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText ?
      this._employees.filter(empFilterFunction, { text, onlyDevs }) : this._employees;
  }
}

function empFilterFunction(employee: any) {
  console.log(this.onlyDevs);
  return employee.name.toLocaleLowerCase().includes(this.text.toLocaleLowerCase());
}
