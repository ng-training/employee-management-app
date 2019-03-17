import { Routes } from '@angular/router';
import { EmployeeListComponent, PageNotFoundComponent } from './components';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent,
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
