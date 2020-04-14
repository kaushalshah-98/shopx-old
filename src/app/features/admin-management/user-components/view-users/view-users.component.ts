import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { User } from '@shared/interfaces';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dataSource: any;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  columnsToDisplay = ['status', 'profilepic', 'name', 'email', 'action'];
  expandedElement: PeriodicElement | null;
  themestatus: boolean;
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    this.property.nightmode.subscribe((res) => (this.themestatus = res));
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 3000);
  }
  blockuser(userdata) {
    console.log(userdata);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
const users: User[] = [
  {
    name: 'kaushal',
    email: 'hello@gmail.com',
    status: true,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'vaibhav',
    email: 'hello@gmail.com',
    status: false,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'yash',
    email: 'hello@gmail.com',
    status: true,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'ram',
    email: 'hello@gmail.com',
    status: false,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'manthan',
    email: 'hello@gmail.com',
    status: true,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'vishal',
    email: 'hello@gmail.com',
    status: true,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  },
  {
    name: 'sahil',
    email: 'hello@gmail.com',
    status: false,
    password: '',
    profilepic:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
  }
];
