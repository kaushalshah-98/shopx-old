import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '@shared/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  selectedimage: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeform();
  }
  initializeform() {
    this.registerform = this.formBuilder.group({
      usernameFormControl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]
      ],
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
      profilepic: this.selectedimage,
      status: true
    };
    console.log(userdata);
  }
  onImageSelected(event) {
    const file: File = event.target.files[0];
    const Reader = new FileReader();
    Reader.onload = (event: any) => {
      this.selectedimage = event.target.result;
    };
    Reader.readAsDataURL(file);
  }
  public hasError(controlName: string, errorName: string) {
    return this.registerform.controls[controlName].hasError(errorName);
  }
}
