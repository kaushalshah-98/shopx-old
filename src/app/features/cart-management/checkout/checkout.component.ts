import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  heading = "CHECKOUT-FORM";
  step1: boolean = false;
  step2: boolean = false;
  @ViewChild("stepper", { static: false }) stepper: MatStepper;

  constructor() {}

  ngOnInit() {}
  setstep1status(event) {
    this.step1 = event;
    console.log(this.step1);
    if (this.step1) {
      console.log("yes");
      this.stepper.next();
    }
  }
  setstep2status(event) {
    this.step2 = event;
  }
}
