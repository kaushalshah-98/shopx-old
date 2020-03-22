import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  usernameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);
  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(4)
  ]);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  photoFormControl = new FormControl("", [Validators.required]);
  constructor() {}

  ngOnInit() {}
  register() {}
}
