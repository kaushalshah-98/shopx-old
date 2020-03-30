import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  @Output() filter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  onFilter(option) {
    this.filter.emit(option)
  }
}
