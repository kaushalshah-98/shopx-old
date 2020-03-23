import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-list',
  templateUrl: './buy-list.component.html',
  styleUrls: ['./buy-list.component.scss']
})
export class BuyListComponent implements OnInit {
  isDisabled: boolean = true;
  isSelected: boolean = true;
  inputvalue: string = '';
  list = [
    { name: 'shirts', done: false },
    { name: 'pants', done: true },
    { name: 'one short', done: false },
    { name: 'television', done: false },
    { name: 'mobile', done: false },
    { name: 'headphones', done: true }
  ];
  buylist: any;
  constructor() {}

  ngOnInit() {
    this.buylist = this.list;
    this.check();
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
    let item = { name: this.inputvalue, done: false };
    this.buylist.push(item);
    this.onClear();
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
    this.list = this.list.filter((item) => !item.done === true);
    this.buylist = this.list;
    this.isSelected = true;
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
