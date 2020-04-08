import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { UserManagementService } from '@services/user-service/user-management.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() selectedIndex: number = 0;
  @Input() paddingtop: Subject<number>;
  padding: number;
  @Output() selectedIndexx = new EventEmitter<boolean>();
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  userdata: any;
  hide: boolean = true;
  editform: FormGroup;
  selectedimage: string;
  dimmed: boolean = false;

  constructor(
    private dialog: ConfirmDialogService,
    private userservice: UserManagementService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.initializeform();
    this.userdata = this.userservice.getUserData();
    this.paddingtop.subscribe(event => {
      this.padding = event;
    });
  }
  onImageSelected(event) {
    const file: File = event.target.files[0];
    const Reader = new FileReader();
    Reader.onload = (event: any) => {
      this.selectedimage = event.target.result;
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
      emailFormControl: ['', [Validators.required, Validators.email]]
      // photoFormControl: ['', [Validators.required]]
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
    this.dimmed = true;
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dimmed = false;
      let userdata = {
        name: this.editform.controls.usernameFormControl.value,
        password: this.editform.controls.passwordFormControl.value,
        email: this.editform.controls.emailFormControl.value,
        profilepic: this.selectedimage
      };
      console.log(userdata);
    }, 2000);
  }
}
