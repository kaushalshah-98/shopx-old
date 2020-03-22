import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  selectedIndex: number;
  heading = "PROFILE SETTINGS";
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
}
