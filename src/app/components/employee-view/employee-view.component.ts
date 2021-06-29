import { Component, Input } from '@angular/core';
import { Employee } from 'app/mock-data/employees.mock';

@Component({
  selector: 'app-employee-view',
  template: `
    <img class="pull-left" [src]="employee?.picture" [alt]="employee?.name" />
    <h4 class="list-group-item-heading">{{ employee?.name }}</h4>
    <p class="list-group-item-text">({{ employee?.position }})</p>
  `,
})
export class EmployeeViewComponent {
  @Input() employee?: Employee;
}
