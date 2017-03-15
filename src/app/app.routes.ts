import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

const routes: Routes = [
  {
    path: "employees",
    component: EmployeeListComponent
  },
  {
    path: "employees/:id",
    component: EmployeeDetailsComponent
  },
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

export { routes };
