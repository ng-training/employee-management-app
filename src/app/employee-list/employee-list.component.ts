import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  exmployees = [{
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
  }];

}
