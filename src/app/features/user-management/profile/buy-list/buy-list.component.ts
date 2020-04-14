import { Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuyListComponent implements OnInit {
  @Input() paddingtop: BehaviorSubject<number>;
  padding: number;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  isDisabled = true;
  isSelected = true;
  show = false;
  inputvalue = '';
  list = [];
  buylist = [];
  dimmed: boolean;
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    this.list = [
      { name: 'shirts', done: false },
      { name: 'pants', done: true },
      { name: 'one short', done: false },
      { name: 'television', done: false },
      { name: 'mobile', done: false },
      { name: 'headphones', done: true }
    ];
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.show = true;
      this.buylist = this.list;
      this.check();
    }, 3000);
  }
  check() {
    this.isSelected = true;
    for (const item of this.buylist) {
      if (item.done === true) {
        this.isSelected = false;
      }
    }
  }
  onInputChanged(input: string) {
    this.inputvalue = input;
    if (input && input.length < 3) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }
  onAddToBuyList() {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dimmed = false;
      this.dataLoading.emit(false);
      const item = { name: this.inputvalue, done: false };
      this.buylist.push(item);
      this.onClear();
    }, 1000);
  }
  onClear() {
    this.inputvalue = '';
    this.isDisabled = true;
  }
  onToggleTodo(item: any) {
    item.done = !item.done;
    this.check();
  }
  onRemoveItem() {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dimmed = false;
      this.dataLoading.emit(false);
      this.list = this.list.filter((item) => !item.done === true);
      this.buylist = this.list;
      this.isSelected = true;
    }, 1000);
  }
  onFilter(filter) {
    switch (filter) {
      case 'ALL':
        this.buylist = this.list;
        break;
      case 'DONE':
        this.buylist = this.list.filter((item) => item.done === true);
        break;
      case 'ACTIVE':
        this.buylist = this.list.filter((item) => item.done === false);
        break;
    }
  }
}
