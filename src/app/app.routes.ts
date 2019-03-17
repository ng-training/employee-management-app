import { Routes } from '@angular/router';

import {
  EmployeeListComponent,
  PageNotFoundComponent,
  EmployeeDetailsComponent,
} from './components';

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
