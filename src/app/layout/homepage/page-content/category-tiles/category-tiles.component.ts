import { Component, OnInit, Input } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

@Component({
  selector: 'app-category-tiles',
  templateUrl: './category-tiles.component.html',
  styleUrls: ['./category-tiles.component.scss']
})
export class CategoryTilesComponent implements OnInit {
  @Input() categoryitems;
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {}
}
