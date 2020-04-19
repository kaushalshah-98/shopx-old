import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from 'src/app/features/user-management/user-service/user-management.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@services/notification/notification.service';
import { User } from '@shared/interfaces';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() selectedIndex = 0;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  @Output() selectedIndexx = new EventEmitter<boolean>();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  userdata: any;
  hide = true;
  editform: FormGroup;
  selectedimage: string;
  dimmed = false;

  constructor(
    private dialog: ConfirmDialogService,
    private userservice: UserManagementService,
    private formBuilder: FormBuilder,
    private property: PropertyAccessService,
    private notification: NotificationService
  ) { }
  ngOnInit() {
    this.initializeform();
    this.fetchuser();
  }
  fetchuser() {
    this.userservice.getuser().subscribe(
      (res) => {
        console.log(res);
        this.userdata = res;
        this.editform.controls.usernameFormControl.setValue(res.name);
        this.editform.controls.emailFormControl.setValue(res.email);
        this.editform.controls.photoFormControl.setValue(res.profilepic);
        this.editform.controls.passwordFormControl.setValue(res.password);

      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        console.log('complete');
      }
    );
  }
  onImageSelected(event) {
    const file: File = event.target.files[0];
    const Reader = new FileReader();
    Reader.onload = (res: any) => {
      this.selectedimage = res.target.result;
    };
    Reader.readAsDataURL(file);
  }
  initializeform() {
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
    if (!this.editform.dirty) {
      this.notification.warning('Details Are not changed');
    } else {
      this.dimmed = true;
      this.dataLoading.emit(true);
      const userdata: User = {
        name: this.editform.controls.usernameFormControl.value,
        password: this.editform.controls.passwordFormControl.value,
        email: this.editform.controls.emailFormControl.value,
        profilepic: this.editform.controls.photoFormControl.value,
      };
      setTimeout(() => {
        this.userservice.updateuser(userdata).subscribe(
          (res) => {
            console.log(res);
            this.userdata = res;
          },
          (error: HttpErrorResponse) => {
            this.dataLoading.emit(false);
            this.dimmed = false;
            console.log(error);
            this.notification.error(error.message);
          },
          () => {
            this.dataLoading.emit(false);
            this.dimmed = false;
            this.notification.info('Profile Is Updated');
          }
        );
      }, 2000);
    }
  }
}
