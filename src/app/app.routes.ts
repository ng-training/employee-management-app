import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./components/index";
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
