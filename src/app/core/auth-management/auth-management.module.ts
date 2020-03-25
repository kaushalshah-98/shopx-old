import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthManagementRoutingModule } from './auth-management-routing.module';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'ng4-social-login';
import { UserManagementModule } from 'src/app/features/user-management/user-management.module';
import { SharedModule } from '@shared/shared.module';

const config = new AuthServiceConfig(
  [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        '445043232203-1n8micdi7k92jqcr4rr5npnvf71db3bu.apps.googleusercontent.com'
      )
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('239009160440368')
    }
  ],
  false
);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatButtonModule,
    UserManagementModule,
    MatCardModule,
    MatInputModule,
    CommonModule,
    AuthManagementRoutingModule,
    SharedModule,
    SocialLoginModule
  ],
  providers: [{ provide: AuthServiceConfig, useFactory: provideConfig }]
})
export class AuthManagementModule {
  constructor() {
    console.log('Lazily Loaded:authModule');
  }
}
