import { Component, OnInit } from '@angular/core';
import { SweetmessageService } from '@services/sweetalert/sweetmessage.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { FormControl, Validators } from '@angular/forms';

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
  quantityformcontrol: FormControl;
  constructor(private sweetalert: SweetmessageService, private dialog: ConfirmDialogService) { }
  addToWishlit() { }
  updateCart(qty, cartitem) {
    console.log(qty);
   }
  removeFromCart(cartitem) {
    console.log(cartitem);
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_remove_this_item')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('removed');
        }
      });
  }
  eventHandler(event) {
    event.preventDefault();
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
    this.quantityformcontrol = new FormControl('',[
      Validators.required,
      Validators.min(1),
      Validators.pattern("[0-9]+")
    ])
    this.cartitems = [
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 10
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 10
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 10
      }
    ];
    this.dataSource = this.cartitems;
  }
}
