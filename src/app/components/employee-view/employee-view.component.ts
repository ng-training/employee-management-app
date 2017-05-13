import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  template: `
   <img class="pull-left"
        *ngIf="employee"
        [src]="employee.picture"
        [alt]="employee.name"
        width="48" height="48">
    <h4 class="list-group-item-heading">{{ employee?.name }}</h4>
    <p class="list-group-item-text">({{ employee?.position }})</p>
  `
})
export class EmployeeViewComponent {
  @Input() employee;
}