import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { UserManagementService } from '../user-service/user-management.service';

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
  padding = 40;

  constructor(
    private formBuilder: FormBuilder,
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}

  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
    this.initializeform();
  }
  initializeform() {
    this.contactform = this.formBuilder.group({
      // usernameFormControl: ['', [Validators.required]],
      messageFormControl: ['', [Validators.required]],
      // emailFormControl: ['', [Validators.required, Validators.email]],
      subjectFormControl: ['', [Validators.required]]
    });
  }
  contact() {
    const data = {
      message: this.contactform.controls.messageFormControl.value,
      subject: this.contactform.controls.subjectFormControl.value
    };
    this.userservice.sendmessage(data).subscribe(
      (res) => {},
      (error: HttpErrorResponse) => {
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        this.notification.success('Message Has Been Sent.');
      }
    );
    this.contactform.reset();
  }
  public hasError(controlName: string, errorName: string) {
    return this.contactform.controls[controlName].hasError(errorName);
  }
  fullscreenstatus(event) {
    if (event) {
      this.padding = 100;
    } else {
      this.padding = 40;
    }
  }
}
