import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from 'src/app/features/user-management/register/register.component';
import { ContactComponent } from 'src/app/features/user-management/contact/contact.component';
import { ForgotPasswordComponent } from 'src/app/features/user-management/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: '$',
    component: ContactComponent
  },
  {
    path: '#',
    component: RegisterComponent
  },
  {
    path: '&',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthManagementRoutingModule { }
