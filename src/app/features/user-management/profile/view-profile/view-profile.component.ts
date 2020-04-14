import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

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
