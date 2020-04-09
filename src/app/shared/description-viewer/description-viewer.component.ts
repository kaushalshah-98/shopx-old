import { Component, OnInit, Input } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-description-viewer',
  templateUrl: './description-viewer.component.html',
  styleUrls: ['./description-viewer.component.scss']
})
export class DescriptionViewerComponent implements OnInit {
  @Input() product: any;
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    console.log(this.product);
  }
}
