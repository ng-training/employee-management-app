import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

export class Address {
  street: string;
  number: string;
  city: string;
}

export class Employee {
  id: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  position: string;
}

@Injectable()
export class EmployeeService {
  private _employees: Employee[] = [
    {
      'id': 'ae7b7cce-57b2-4a79-ba23-4fbc170fae80',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
      'name': 'Loraine Bradford',
      'email': 'loraine.bradford@visma.com',
      'phone': '+40 (874) 400-3755',
      'address': {
        'street': 'Fenimore Street',
        'number': '325',
        'city': 'Villarreal'
      },
      'position': 'Systems developer'
    },
    {
      'id': 'cc78de91-08fb-427b-a375-a53952e19331',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/15.jpg',
      'name': 'Rosetta Bond',
      'email': 'rosetta.bond@visma.com',
      'phone': '+40 (983) 463-3282',
      'address': {
        'street': 'Gerritsen Avenue',
        'number': '622',
        'city': 'Vicksburg'
      },
      'position': 'Software Architect'
    },
    {
      'id': '40df43ad-b3e4-4251-8981-61afac714538',
      'picture': 'https://randomuser.me/api/portraits/thumb/men/16.jpg',
      'name': 'Jimenez Delgado',
      'email': 'jimenez.delgado@visma.com',
      'phone': '+40 (834) 457-3664',
      'address': {
        'street': 'Fairview Place',
        'number': '950',
        'city': 'Allensworth'
      },
      'position': 'Systems developer'
    },
    {
      'id': 'a5c4a2f9-0377-4103-b3f3-f7b1b61c38eb',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/14.jpg',
      'name': 'Sharron Estes',
      'email': 'sharron.estes@visma.com',
      'phone': '+40 (897) 461-2941',
      'address': {
        'street': 'Harbor Court',
        'number': '128',
        'city': 'Nutrioso'
      },
      'position': 'Business analyst'
    },
    {
      'id': '716f3b67-228a-41f3-90f5-475a938f853b',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/13.jpg',
      'name': 'Imelda Bernard',
      'email': 'imelda.bernard@visma.com',
      'phone': '+40 (906) 416-2656',
      'address': {
        'street': 'Gelston Avenue',
        'number': '668',
        'city': 'Neahkahnie'
      },
      'position': 'HR'
    },
    {
      'id': 'f056adf1-878e-4b8c-ba25-a76c27bbc998',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/12.jpg',
      'name': 'Angeline Flynn',
      'email': 'angeline.flynn@visma.com',
      'phone': '+40 (896) 574-3804',
      'address': {
        'street': 'Amherst Street',
        'number': '502',
        'city': 'Statenville'
      },
      'position': 'Domain expert'
    },
    {
      'id': 'fb20906d-45d8-42a2-9066-7161ddc0b949',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/11.jpg',
      'name': 'Elise Willis',
      'email': 'elise.willis@visma.com',
      'phone': '+40 (969) 537-3895',
      'address': {
        'street': 'Sackman Street',
        'number': '345',
        'city': 'Buxton'
      },
      'position': 'Business analyst'
    },
    {
      'id': '4a1154cb-6c57-4949-a63b-f49e10e2172b',
      'picture': 'https://randomuser.me/api/portraits/thumb/men/15.jpg',
      'name': 'Jacobson Hatfield',
      'email': 'jacobson.hatfield@visma.com',
      'phone': '+40 (941) 544-2026',
      'address': {
        'street': 'Cox Place',
        'number': '316',
        'city': 'Brownlee'
      },
      'position': 'Software Architect'
    },
    {
      'id': 'c2731219-0da4-4571-8fe1-f5e09fb4debb',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
      'name': 'Kim Burt',
      'email': 'kim.burt@visma.com',
      'phone': '+40 (979) 478-3821',
      'address': {
        'street': 'Bergen Place',
        'number': '134',
        'city': 'Terlingua'
      },
      'position': 'HR'
    },
    {
      'id': '70356041-59a2-4d35-b69e-97cb1116b638',
      'picture': 'https://randomuser.me/api/portraits/thumb/women/9.jpg',
      'name': 'Latonya Long',
      'email': 'latonya.long@visma.com',
      'phone': '+40 (912) 434-2580',
      'address': {
        'street': 'Court Street',
        'number': '980',
        'city': 'Clayville'
      },
      'position': 'Software Architect'
    }
  ];

  constructor(private _logger: LoggerService) { }

  getEmployees(): Employee[] {
    this._logger.log('Get employees');
    return this._employees;
  }

  getEmployeeById(id: string) {
    this._logger.log(`Get employee ${id}`);
    return this._employees.find(e => e.id === id);
  }
}
