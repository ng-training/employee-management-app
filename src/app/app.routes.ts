import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "employees",
    component: EmployeeListComponent
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
