import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  heading = 'CHECKOUT-FORM';
  step1: boolean = false;
  step2: boolean = false;
  paddingtopp: Subject<number> = new Subject();
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  constructor() { }

  ngOnInit() { }
  setstep1status(event) {
    this.step1 = event;
    console.log(this.step1);
    if (this.step1) {
      console.log('yes');
      this.stepper.next();
    }
  }
  setstep2status(event) {
    this.step2 = event;
  }
  changetheme(event) {
    console.log(event);
  }
  fullscreenstatus(event) {
    if (event) {
      this.paddingtopp.next(80);
    } else {
      this.paddingtopp.next(20);
    }
  }
}
