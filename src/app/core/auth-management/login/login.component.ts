import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  AuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'ng4-social-login';
import { FormControl, Validators } from '@angular/forms';
import { UserManagementService } from 'src/app/core/services/user-service/user-management.service';
import { Router } from '@angular/router';
import { RoleService } from '@services/role-service/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  usernameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  constructor(
    private socialAuthService: AuthService,
    private userservice: UserManagementService,
    private router: Router,
    private role: RoleService
  ) {}

  ngOnInit() {}
  login() {
    this.role.setRole('admin');
    this.router.navigate(['admin']);
    // this.userservice.setRole("user");
    // this.router.navigate(["home"]);
  }
  loginWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userdata) => {
      this.userservice.setUserData(userdata);
      this.router.navigate(['home']);
    });
  }
  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userdata) => {
      this.userservice.setUserData(userdata);
      this.router.navigate(['home']);
    });
  }
}
