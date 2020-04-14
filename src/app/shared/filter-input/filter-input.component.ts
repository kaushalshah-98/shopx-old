import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductItem } from '@shared/interfaces';
@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterInputComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter();
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {}
  onFilter(option) {
    this.filter.emit(option);
  }
}
