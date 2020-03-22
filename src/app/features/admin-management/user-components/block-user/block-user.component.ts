import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-block-user",
  templateUrl: "./block-user.component.html",
  styleUrls: ["./block-user.component.scss"]
})
export class BlockUserComponent implements OnInit {
  foods = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];
  constructor() {}

  ngOnInit() {}
}
