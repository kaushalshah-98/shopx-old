import { Component, OnInit } from '@angular/core';
import { SweetmessageService } from '@services/sweetalert/sweetmessage.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-view-cartitems',
  templateUrl: './view-cartitems.component.html',
  styleUrls: ['./view-cartitems.component.scss']
})
export class ViewCartitemsComponent implements OnInit {
  cartitems = [];
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price', 'action', 'delete'];
  dataSource;
  totalprice;
  shipping;
  constructor(private sweetalert: SweetmessageService, private dialog: ConfirmDialogService) {}
  addToWishlit() {}
  updateCart(qty, cartitem) {}
  removeFromCart(cartitem) {
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_remove_this_item')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('removed');
        }
      });
  }
  emptycart() {
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_empty_your_cart')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('emptied');
        }
      });
  }
  ngOnInit() {
    this.cartitems = [
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
    ];
    this.dataSource = this.cartitems;
  }
}
