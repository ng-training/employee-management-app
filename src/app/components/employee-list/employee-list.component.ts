import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../core/index';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/combineLatest';

import { Employee } from '../../core/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  private _employees: Array<any>;

  employees: Array<any>;
  searchStream$ = new Subject<string>();
  filterStream$ = new Subject<boolean>();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this._employees = this.employees = employees;
      this.employees = this._employees;
    });

    const filteredSearchStream$ = this.searchStream$.debounceTime(200)
                                                    .distinctUntilChanged()
                                                    .startWith('');
    const devFilterStream$ = this.filterStream$.startWith(false);

    Observable.combineLatest(filteredSearchStream$, devFilterStream$)
              .subscribe(([ searchTerm, onlyDevs ]) => this.filterEmployees(searchTerm, onlyDevs));
  }

  filterEmployees(text: string = '', onlyDevs: boolean) {
    if (!this._employees) {
      return;
    }

    this.employees = this._employees.filter(empFilterFunction, { text, onlyDevs });
  }
}

function empFilterFunction(employee: any) {
  console.log('Filtering employees');

  const matchName = this.text.length === 0 || employee.name.toLocaleLowerCase().includes(this.text.toLocaleLowerCase());
  const isDev = !this.onlyDevs || employee.position.includes('dev');

  return matchName && isDev;
}
