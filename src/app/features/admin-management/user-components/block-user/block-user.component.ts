import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {
  userid: string;
  isDisabled: boolean = true;
  constructor() {}

  ngOnInit() {}
  onBlockUser() {
    console.log(this.userid);
  }
  onInputChanged(input: string) {
    if (input === null || input === '') {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
    this.userid = input;
  }
}
