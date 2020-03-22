import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(179deg)'
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)'
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class PaymentComponent implements OnInit {
  front = true;
  backk = false;
  code = 895;
  expiry = '09/06';
  cardnumber = 676767676767;
  name = 'Kaushal Shah';
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
  nameFormControl = new FormControl('', [Validators.required]);
  cvvFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern('[0-9]*')
  ]);
  cardnumberFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.pattern('[0-9]*')
  ]);
  expiryFormControl = new FormControl('', [Validators.required]);
  @Output() step2status = new EventEmitter<boolean>();
  flip: string = 'inactive';
  constructor(private myStepper: MatStepper) {}

  ngOnInit() {}
  toggle() {
    this.flip = this.flip == 'inactive' ? 'active' : 'inactive';
  }
  toggleFlip(status: boolean) {
    this.flip = status === true ? 'active' : 'inactive';
  }
  goForward() {
    if (
      this.nameFormControl.status === 'VALID' &&
      this.cardnumberFormControl.status === 'VALID' &&
      this.expiryFormControl.status === 'VALID' &&
      this.cvvFormControl.status === 'VALID'
    ) {
      this.myStepper.next();
      this.step2status.emit(true);
    } else {
      this.step2status.emit(false);
    }
  }
}
