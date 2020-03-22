import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-billing",
  templateUrl: "./billing.component.html",
  styleUrls: ["./billing.component.scss"]
})
export class BillingComponent implements OnInit {
  country = [
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" }
  ];
  state = [
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" },
    { name: "India" }
  ];
  @Output() step1status = new EventEmitter<boolean>();

  nameFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3)
  ]);
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  PincodeFormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(6),
    Validators.pattern("[0-9]*")
  ]);
  LastnameFormControl = new FormControl("", [Validators.required]);
  address1FormControl = new FormControl("", [Validators.required]);
  selectedstate = new FormControl("", [Validators.required]);
  address2FormControl = new FormControl();
  selectedcountry = new FormControl("", [Validators.required]);

  constructor(private myStepper: MatStepper) {}
  ngOnInit() {}

  goForward() {
    if (
      this.nameFormControl.status === "VALID" &&
      this.emailFormControl.status === "VALID" &&
      this.PincodeFormControl.status === "VALID" &&
      this.address1FormControl.status === "VALID" &&
      this.LastnameFormControl.status === "VALID" &&
      this.selectedstate.status === "VALID" &&
      this.selectedcountry.status === "VALID"
    ) {
      this.myStepper.next();
      this.step1status.emit(true);
    } else {
      this.step1status.emit(false);
    }
  }
}
