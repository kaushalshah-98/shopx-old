import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      passwordFormControl: ['', [Validators.required, Validators.minLength(4)]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      photoFormControl: ['', [Validators.required]]
    });
  }
  register() {
    let userdata = {
      name: this.registerform.controls.usernameFormControl.value,
      password: this.registerform.controls.passwordFormControl.value,
      email: this.registerform.controls.emailFormControl.value,
      photo: this.registerform.controls.photoFormControl.value
    };
    console.log(userdata);
  }
  public hasError(controlName: string, errorName: string) {
    return this.registerform.controls[controlName].hasError(errorName);
  }
}
