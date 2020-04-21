import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { User } from '@shared/interfaces';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from '../../user-service/user-management.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  hide = true;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  userdata: User;

  constructor(
    public property: PropertyAccessService,
    private userservice: UserManagementService,
    private notification: NotificationService
  ) {}
  ngOnInit() {
    this.userservice.getuser().subscribe(
      (res) => {
        console.log(res);
        if (res === null || res === undefined) {
          this.notification.warning('Check Your Network!');
          this.notification.info('Try to reload the page!');
        }
        this.userdata = res;
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
}
