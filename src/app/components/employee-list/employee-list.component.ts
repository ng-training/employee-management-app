import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent {

  private _employees = [{
    name: 'John Doe',
    position: 'software developer',
    skills: ['javascript', 'html', 'css'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
  }, {
    name: 'Johanan Stevan',
    position: 'software developer',
    skills: ['C#', '.net'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/33.jpg'
  }, {
    name: 'Archil Ezio',
    position: 'team manager',
    skills: ['planning', 'communication'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/43.jpg'
  }, {
    name: 'Kadek Matthew',
    position: 'quality assurance',
    skills: ['test plans', 'automated tests'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/13.jpg'
  }, {
    name: 'Rajesh Vincenzo',
    position: 'quality assurance',
    skills: ['requirements gathering', 'sql'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/14.jpg'
  }, {
    name: 'Aiolos Arash',
    position: 'software developer',
    skills: ['java', 'web'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/15.jpg'
  }, {
    name: 'Pontus Zdislav',
    position: 'software developer',
    skills: ['java', 'cloud'],
    avatar: 'https://randomuser.me/api/portraits/thumb/men/16.jpg'
  }];

  employees: Array<any>;

  constructor() {
    this.employees = this._employees;
  }

  filterEmployees(text: string) {
    const hasSearchText = text && text.length > 0;
    this.employees = hasSearchText ? this._employees.filter(e => e.name.includes(text)) : this._employees;
  }
}
