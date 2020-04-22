import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { UserManagementService } from '../user-service/user-management.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {
  forgotpasswordform: FormGroup;
  dataLoading: EventEmitter<boolean> = new EventEmitter(true);
  show = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}

  ngAfterViewInit() {
    this.dataLoading.emit(false);
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.forgotpasswordform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      emailFormControl: ['', [Validators.required, Validators.email]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.forgotpasswordform.controls[controlName].hasError(errorName);
  }
  send() {
    this.dataLoading.emit(true);
    const userdata = {
      name: this.forgotpasswordform.controls.usernameFormControl.value,
      email: this.forgotpasswordform.controls.emailFormControl.value
    };
    this.userservice.forgotpassword(userdata).subscribe(
      (res) => {
        if (res.length <= 0) {
          this.notification.warning('Name or Email you entered is not register with us');
          this.notification.warning('Only registered users can get password');
        } else {
          this.notification.success('Your Password Has been Sent to Your Email');
        }
      },
      (error: HttpErrorResponse) => {
        this.dataLoading.emit(false);
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.dataLoading.emit(false);
      }
    );
  }
}
