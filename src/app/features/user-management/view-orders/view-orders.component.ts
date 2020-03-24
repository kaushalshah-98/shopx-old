import { Component, OnInit } from '@angular/core';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.scss']
})
export class ViewOrdersComponent implements OnInit {
  heading = 'YOUR ORDERS';
  i: number = 0;
  orderitems: any;
  displayedColumns: string[] = ['number', 'image', 'name', 'price', 'quantity', 'action'];
  constructor(private view: QuickViewService, private dialog: ConfirmDialogService) {}

  ngOnInit() {
    this.orderitems = [
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
        name: 'Order-2',
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
        name: 'Order-3',
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
      }
    ];
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  cancelOrder(item) {
    this.dialog
      .showConfirmDialog('Are You Sure Want to Cancel This Order ?')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('emptied');
        }
      });
  }
  reset() {
    this.i = 0;
  }
  increment() {
    this.i = this.i + 1;
    return this.i;
  }
}
