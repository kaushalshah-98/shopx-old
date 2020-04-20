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
          this.userlist = res;
          this.dataSource.data = res;
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
        this.notification.success(this.message);
        this.fetchusers();
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
// const users: User[] = [
//   {
//     name: 'kaushal',
//     email: 'hello@gmail.com',
//     status: true,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'vaibhav',
//     email: 'hello@gmail.com',
//     status: false,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'yash',
//     email: 'hello@gmail.com',
//     status: true,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'ram',
//     email: 'hello@gmail.com',
//     status: false,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'manthan',
//     email: 'hello@gmail.com',
//     status: true,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'vishal',
//     email: 'hello@gmail.com',
//     status: true,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   },
//   {
//     name: 'sahil',
//     email: 'hello@gmail.com',
//     status: false,
//     password: '',
//     profilepic:
//       'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
//   }
// ];
