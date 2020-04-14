import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BehaviorSubject } from 'rxjs';

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

  @Output() step2status = new EventEmitter<boolean>();
  flip = 'inactive';
  paymentform: FormGroup;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  constructor(private myStepper: MatStepper, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeform();
  }
  initializeform() {
    this.paymentform = this.formBuilder.group({
      nameFormControl: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      cvvFormControl: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.minLength(3),
          Validators.pattern('[0-9]*')
        ]
      ],
      cardnumberFormControl: [
        '',
        [Validators.required, Validators.minLength(12), Validators.pattern('[0-9]*')]
      ],
      expiryFormControl: [
        '',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5),
          Validators.pattern('[0-9 /]*')
        ]
      ]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.paymentform.controls[controlName].hasError(errorName);
  }
  toggle() {
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
  }
  toggleFlip(status: boolean) {
    this.flip = status === true ? 'active' : 'inactive';
  }
  goForward() {
    if (this.paymentform.status === 'VALID') {
      this.myStepper.next();
      this.step2status.emit(true);
    } else {
      this.step2status.emit(false);
    }
  }
}
