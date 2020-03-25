import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  country = [
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' }
  ];
  state = [
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' },
    { name: 'India' }
  ];
  @Output() step1status = new EventEmitter<boolean>();

  billingform: FormGroup;

  constructor(private myStepper: MatStepper, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.billingform = this.formBuilder.group({
      nameFormControl: ['', [Validators.required, Validators.minLength(3)]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      PincodeFormControl: [
        '',
        [Validators.required, Validators.maxLength(6), Validators.pattern('[0-9]*')]
      ],
      LastnameFormControl: ['', [Validators.required]],
      address1FormControl: ['', [Validators.required]],
      selectedstate: ['', [Validators.required]],
      address2FormControl: [],
      selectedcountry: ['', [Validators.required]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.billingform.controls[controlName].hasError(errorName);
  }
  goForward() {
    if (this.billingform.status === 'VALID') {
      this.myStepper.next();
      this.step1status.emit(true);
    } else {
      this.step1status.emit(false);
    }
  }
}
