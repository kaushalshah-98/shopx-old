import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { User } from '@shared/interfaces';
import { AdminManagementService } from '../../admin-service/admin-management.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dataSource = new MatTableDataSource<User>();
  pageSizeOptions: number[] = [10, 20, 50, 100];
  columnsToDisplay = ['status', 'profilepic', 'name', 'email', 'action'];
  message: string;
  userlist: User[];
  selectedStatus = 'ALL';
  status = [{ name: 'ALL' }, { name: 'UnBlocked Users' }, { name: 'Blocked Users' }];
  constructor(
    private property: PropertyAccessService,
    private adminservice: AdminManagementService,
    private notification: NotificationService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.fetchusers();
  }
  fetchusers() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.adminservice.getusers().subscribe(
        (res) => {
          console.log(res);
          if (res === null || res === undefined) {
            this.notification.warning('Check Your Network!');
            this.notification.info('Try to reload the page!');
          } else {
            this.userlist = res;
            this.dataSource.data = res;
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.notification.error(error.message);
        },
        () => {
          this.dataLoading.emit(false);
        }
      );
    }, 3000);
  }
  blockuser(userdata: User) {
    const status = { status: !userdata.status };
    if (userdata.status) {
      this.message = 'User has been blocked';
    } else {
      this.message = 'User has been unblocked';
    }
    this.adminservice.blockuser(status, userdata.userid).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => this.notification.error(error.message),
      () => {
        this.fetchusers();
        this.notification.success(this.message);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  statusChanged(status) {
    switch (status) {
      case 'ALL':
        this.dataSource.data = this.userlist;
        break;
      case 'UnBlocked Users':
        this.dataSource.data = this.userlist.filter((item) => item.status === true);
        break;
      case 'Blocked Users':
        this.dataSource.data = this.userlist.filter((item) => item.status === false);
        break;
    }
  }
}
