import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../../../mock-data/employees.mock';
import { EmployeeService } from '../../../services';

import { Subject, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  initialEmployees: Employee[];
  employees: Employee[];
  searchStream$ = new Subject<string>();
  filterStream$ = new Subject<boolean>();

  constructor(
    private employeesService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe((employees: Employee[]) => {
      this.initialEmployees = employees;
      this.employees = this.initialEmployees;
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
    console.log('Filtering employees', text, onlyDevs);
    if (!this.employees) {
      return;
    }
    this.employees = this.initialEmployees.filter((employee: any) => {
      const matchName =
        text.length === 0 ||
        employee.name.toLocaleLowerCase().includes(text.toLocaleLowerCase());
      const isDev = !onlyDevs || employee.position.includes('dev');

      return matchName && isDev;
    });
  }

  goToNewEmployee() {
    this.router.navigateByUrl('employees/new');
  }
}
