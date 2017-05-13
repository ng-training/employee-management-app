import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../core/index';

import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  private _employees: Array<any>;

  employees: Array<any>;
  searchStream$ = new Subject<string>();

  constructor(private employeesService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this._employees = this.employeesService.getEmployees();
    this.employees = this._employees;

    this.searchStream$.debounceTime(200)
                      .distinctUntilChanged()
                      .filter(s => s.length > 2)
                      .subscribe(searchTerm => this.filterEmployees(searchTerm));
  }

  filterEmployees(text: string) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText ? this._employees
      .filter(e => e.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())) : this._employees;
  }

  goToNewEmployee() {
    this.router.navigateByUrl('employees/new');
  }
}
