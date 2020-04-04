import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import {
  AuthService,
  SocialUser,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'ng4-social-login';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  loginform: FormGroup;
  show: boolean = false;
  constructor(
    private socialAuthService: AuthService,
    private userservice: UserManagementService,
    private router: Router,
    private role: RoleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.loginform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.loginform.controls[controlName].hasError(errorName);
  }
  login() {
    let userdata = {
      username: btoa(this.loginform.controls.usernameFormControl.value),
      password: btoa(this.loginform.controls.passwordFormControl.value),
    }
    let decuserdata = {
      username: atob(userdata.username),
      password: atob(userdata.password)
    }
    console.log(userdata);
    console.log(decuserdata);
    this.dataLoading.emit(true);
    this.show = true;
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.role.setRole('admin');
      this.router.navigate(['admin']);
      // this.userservice.setRole("user");
      // this.router.navigate(["home"]);
    }, 3000);
  }
  loginWithFacebook() {
    this.dataLoading.emit(true);
    this.show = true;
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userdata) => {
        this.userservice.setUserData(userdata);
        this.router.navigate(['home']);
      });
    }, 3000);
  }
  loginWithGoogle() {
    this.dataLoading.emit(true);
    this.show = true;
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userdata) => {
        this.userservice.setUserData(userdata);
        this.router.navigate(['home']);
      });
    }, 3000);
  }
}
