import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../../core/index';

import { Subject, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  startWith
} from 'rxjs/operators';

import { Employee } from '../../core/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  private _employees: Array<any>;

  employees: Array<any>;
  searchStream$ = new Subject<string>();
  filterStream$ = new Subject<boolean>();

  constructor(
    private employeesService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees: Employee[]) => {
      this._employees = this.employees = employees;
      this.employees = this._employees;
    });

    const filteredSearchStream$ = this.searchStream$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      startWith('')
    );
    const devFilterStream$ = this.filterStream$.pipe(startWith(false));

    combineLatest(filteredSearchStream$, devFilterStream$).subscribe(
      ([searchTerm, onlyDevs]) => this.filterEmployees(searchTerm, onlyDevs)
    );
  }

  filterEmployees(text: string = '', onlyDevs: boolean) {
    if (!this._employees) {
      return;
    }

    this.employees = this._employees.filter(empFilterFunction, {
      text,
      onlyDevs
    });
  }

  goToNewEmployee() {
    this.router.navigateByUrl('employees/new');
  }
}

function empFilterFunction(employee: any) {
  console.log('Filtering employees');

  const matchName =
    this.text.length === 0 ||
    employee.name.toLocaleLowerCase().includes(this.text.toLocaleLowerCase());
  const isDev = !this.onlyDevs || employee.position.includes('dev');

  return matchName && isDev;
}
