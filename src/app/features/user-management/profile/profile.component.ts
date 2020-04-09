import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  paddingtop: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedIndex: number;
  constructor() { }

  ngOnInit() { }

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
    if (event) this.paddingtop.next(100);
    else this.paddingtop.next(0);
  }
}
