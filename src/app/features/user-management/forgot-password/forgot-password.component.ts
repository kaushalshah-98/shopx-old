import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpasswordform: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {}

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
    let userdata = {
      name: this.forgotpasswordform.controls.usernameFormControl.value,
      email: this.forgotpasswordform.controls.emailFormControl.value
    };
    console.log(userdata);
    this.router.navigate(['login']);
  }
}
