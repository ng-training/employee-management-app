import { Routes } from '@angular/router';

import { EmployeeListComponent,
         PageNotFoundComponent,
         EmployeeDetailsComponent,
         EmployeeDetailsReactiveComponent,
        } from './components/index';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employees/new',
    component: EmployeeDetailsReactiveComponent
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: '',
    redirectTo: '/employees',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export { routes };
