import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {
  userid: string;
  isDisabled = true;
  heightt: number;
  themestatus: boolean;
  constructor(private property: PropertyAccessService) {}
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
