import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  hide: boolean = true;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;

  constructor() { }
  ngOnInit() {}
}
