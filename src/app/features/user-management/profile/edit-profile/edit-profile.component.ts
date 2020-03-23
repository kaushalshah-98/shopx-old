import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  usernameFormControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  photoFormControl = new FormControl('', [Validators.required]);
  constructor(private dialog: ConfirmDialogService, private userservice: UserManagementService) {}
  ngOnInit() {
    this.userdata = this.userservice.getUserData();
  }
  cancel() {
    if (
      this.emailFormControl.touched ||
      this.passwordFormControl.touched ||
      this.photoFormControl.touched ||
      this.usernameFormControl.touched
    ) {
      this.dialog.showConfirmDialog('Are You Sure Want to Cancel ?').subscribe((result) => {
        if (result === 'yes') {
          this.emailFormControl.reset();
          this.passwordFormControl.reset();
          this.photoFormControl.reset();
          this.usernameFormControl.reset();
          this.selectedIndexx.emit(false);
        }
      });
    } else {
      this.selectedIndexx.emit(false);
    }
  }
}
