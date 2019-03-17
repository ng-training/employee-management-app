import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../mock-data/employees.mock';
import { EmployeeService } from '../../../services';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  initialEmployees: Employee[];
  employees: Employee[];
  searchStream$ = new Subject<string>();

  constructor(
    private employeesService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initialEmployees = this.employeesService.getEmployees();
    this.employees = this.initialEmployees;

    this.searchStream$
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        filter(s => s.length > 2)
      )
      .subscribe(searchTerm => this.filterEmployees(searchTerm));
  }

  filterEmployees(text: string) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText
      ? this.initialEmployees.filter(e =>
          e.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
        )
      : this.initialEmployees;
  }

  goToNewEmployee() {
    this.router.navigateByUrl('employees/new');
  }
}
