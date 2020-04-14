import { Component, OnInit, Input } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() position = 'fixed';
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {}
}
