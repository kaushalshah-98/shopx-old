import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  subject = [
    { name: 'complaint' },
    { name: 'feature request' },
    { name: 'bug report' },
    { name: 'feedback' }
  ];
  contactform: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactform = this.formBuilder.group({
      usernameFormControl: ['', [Validators.required]],
      messageFormControl: ['', [Validators.required]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      subjectFormControl: ['', [Validators.required]]
    });
  }
  contact() {
    let data = {
      name: this.contactform.controls.usernameFormControl.value,
      message: this.contactform.controls.messageFormControl.value,
      email: this.contactform.controls.emailFormControl.value,
      subject: this.contactform.controls.subjectFormControl.value
    };
    console.log(data);
  }
  public hasError(controlName: string, errorName: string) {
    return this.contactform.controls[controlName].hasError(errorName);
  }
}
