import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-user-order',
  templateUrl: './view-user-order.component.html',
  styleUrls: ['./view-user-order.component.scss']
})
export class ViewUserOrderComponent implements OnInit {
  constructor() { }
  displayedColumns: string[] = ['number', 'image', 'name', 'price', 'quantity'];
  i = 0;
  user = [
    {
      image: 'https://assets.thehansindia.com/hansindia-bucket/kaushal%20army_5962.jpg',
      name: 'kaushal',
      order: [
        {
          name: 'Order-1',
          date: '23-May-2020',
          products: [
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            },
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            },
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            }
          ]
        },
        {
          name: 'Order-1',
          date: '23-May-2020',
          products: [
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            }
          ]
        },
        {
          name: 'Order-1',
          date: '23-May-2020',
          products: [
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            },
            {
              name: 'tshirt',
              price: 40000,
              quantity: 6,
              image:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
              productqty: 50
            }
          ]
        },
      ]
    },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Hrk0TLzUYvbfxcbXCmAqPmIkg7UgVhl9ansXE8K_K2f7ASo-', name: 'Yash' },
    { image: 'https://assets.thehansindia.com/hansindia-bucket/kaushal%20army_5962.jpg', name: 'kaushal' },
  ]
  ngOnInit() { }
  reset() {
    this.i = 0;
  }
  increment() {
    this.i = this.i + 1;
    return (this.i);
  }
}
