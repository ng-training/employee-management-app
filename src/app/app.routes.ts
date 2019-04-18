import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './components';
import {
  EmployeeListComponent,
  EmployeeDetailsComponent,
} from './employee/components';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export { routes };
