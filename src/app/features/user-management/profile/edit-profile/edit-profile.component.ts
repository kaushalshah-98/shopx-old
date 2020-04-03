import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { UserManagementService } from '@services/user-service/user-management.service';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() selectedIndex: number = 0;
  @Output() selectedIndexx = new EventEmitter<boolean>();
  userdata: any;
  hide: boolean = true;
  editform: FormGroup;

  constructor(
    private dialog: ConfirmDialogService,
    private userservice: UserManagementService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.userdata = this.userservice.getUserData();
    this.editform = this.formBuilder.group({
      usernameFormControl: [
        '',
        [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]
      ],
      passwordFormControl: ['', [Validators.required, Validators.minLength(4)]],
      emailFormControl: ['', [Validators.required, Validators.email]],
      photoFormControl: ['', [Validators.required]]
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.editform.controls[controlName].hasError(errorName);
  }
  cancel() {
    if (this.editform.touched) {
      this.dialog.showConfirmDialog('confirm.are_you_sure_want_to_cancel').subscribe((result) => {
        if (result === 'yes') {
          this.editform.reset();
          this.selectedIndexx.emit(false);
        }
      });
    } else {
      this.selectedIndexx.emit(false);
    }
  }
  save() {
    let userdata = {
      name: this.editform.controls.usernameFormControl.value,
      password: this.editform.controls.passwordFormControl.value,
      email: this.editform.controls.emailFormControl.value,
      photo: this.editform.controls.photoFormControl.value
    };
    console.log(userdata);
  }
}
