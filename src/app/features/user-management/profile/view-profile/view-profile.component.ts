import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  hide: boolean = true;
  @Input() paddingtop: Subject<number>;
  padding: number;

  constructor() { }
  ngOnInit() {
    this.paddingtop.subscribe(event => {
      this.padding = event;
    });
  }
}
