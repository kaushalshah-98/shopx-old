import { Component, Input, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  hide = true;
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;

  constructor(private property: PropertyAccessService) {}
  ngOnInit() {}
}
