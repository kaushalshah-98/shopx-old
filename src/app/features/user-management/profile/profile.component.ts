import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  paddingtopp: Subject<number> = new Subject();
  paddingtoppp: Subject<number> = new Subject();
  selectedIndex: number;
  constructor() {}

  ngOnInit() {}

  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  getselectedIndex(event) {
    if (event === false) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }
  changetheme(event) {
    console.log(event);
  }
  fullscreenstatus(event) {
    if (event) {
      this.paddingtoppp.next(65);
      this.paddingtopp.next(100);
    } else {
      this.paddingtoppp.next(0);
      this.paddingtopp.next(0);
    }
  }
}
