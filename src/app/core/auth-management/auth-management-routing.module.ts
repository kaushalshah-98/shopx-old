import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "src/app/features/user-management/register/register.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "#",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthManagementRoutingModule {}
