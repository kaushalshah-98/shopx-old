import { Component, EventEmitter, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { RoleService } from '@services/role-service/role.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialUser
} from 'ng4-social-login';
import { UserManagementService } from 'src/app/core/services/user-service/user-management.service';

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
  show = false;
  constructor(
    private socialAuthService: AuthService,
    private userservice: UserManagementService,
    private router: Router,
    private role: RoleService,
    private formBuilder: FormBuilder,
    private property: PropertyAccessService
  ) {}

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
    const userdata = {
      username: btoa(this.loginform.controls.usernameFormControl.value),
      password: btoa(this.loginform.controls.passwordFormControl.value)
    };
    const decuserdata = {
      username: atob(userdata.username),
      password: atob(userdata.password)
    };
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
