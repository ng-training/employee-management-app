import { Injectable } from '@angular/core';
import { employees, Employee, Address } from '../../mock-data/employees.mock';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = employees;

  private defaultUserPicture =
    'https://randomuser.me/api/portraits/thumb/lego/5.jpg';

  constructor(private logger: LoggerService) {}

  getEmployees(): Employee[] {
    this.logger.log('Get employees');

    return this.employees;
  }

  getEmployeeById(id: string): Employee {
    this.logger.log(`Get employee ${id}`);
    return this.employees.find(e => e.id === id);
  }

  addEmployee(employee: Employee) {
    employee.id = this.getNewId();
    employee.picture = this.defaultUserPicture;
    if (!employee.address) {
      employee.address = <Address>{};
    }

    this.employees.push(employee);
  }

  private getNewId(): string {
    const s4 = () =>
      Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);

    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
