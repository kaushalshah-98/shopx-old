import { Component, EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { SweetmessageService } from '@services/sweetalert/sweetmessage.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { CartItem } from '@shared/interfaces';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { CartManagementService } from '../cart-service/cart-management.service';
import { NotificationService } from '@services/notification/notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-view-cartitems',
  templateUrl: './view-cartitems.component.html',
  styleUrls: ['./view-cartitems.component.scss']
})
export class ViewCartitemsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price', 'action', 'delete'];
  dataSource = new MatTableDataSource<CartItem>();
  height = 267;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  totalprice: number = 0;
  shipping;
  quantityformcontrol: FormControl;
  dimmed = false;
  constructor(
    private sweetalert: SweetmessageService,
    private dialog: ConfirmDialogService,
    private view: QuickViewService,
    public property: PropertyAccessService,
    private cartservice: CartManagementService,
    private notification: NotificationService
  ) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
    this.quantityformcontrol = new FormControl('', Validators.required);
    this.initializeCart();
  }
  initializeCart() {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(async () => {
      await this.cartservice.getCartItems()
        .then((res) => {
          if (res === null || res === undefined) {
            this.notification.warning('Check Your Network!');
            this.notification.info('Try to reload the page!');
          } else {
            this.dataSource.data = res;
            this.getTotalCost();
          }
        })
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        })
        .finally(() => {
          this.dimmed = false;
          this.dataLoading.emit(false);
        });

      await this.cartservice.getCartSize()
        .then((res) => {
          if (res === null || res === undefined) {
            this.notification.warning('Check Your Network!');
            this.notification.info('Try to reload the page!');
          } else {
            this.property.cartsize.next(res.cartsize);
          }
        })
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        })
    }, 1000);
  }
  getTotalCost() {
    this.totalprice = this.dataSource.data
      .map((t) => (t.price * t.qty))
      .reduce((acc, value) => acc + value, 0);
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  addToWishlit() { }
  updateCart(qty: number, cartitem: CartItem) {
    const item = {
      quantity: qty,
      product_id: cartitem.product_id
    }
    this.dataLoading.emit(true);
    this.cartservice.updateCart(item).subscribe(
      (res) => res,
      (error: HttpErrorResponse) => {
        this.dimmed = false;
        console.log(error);
        this.dataLoading.emit(false);
        this.notification.error(error.message);
      },
      () => {
        this.dimmed = false;
        this.dataLoading.emit(false);
        this.notification.success(`Quantity has been updated to ${qty}`);
        this.initializeCart();
      }
    );
  }
  removeFromCart(cartitem: CartItem) {
    this.dimmed = true;
    const product = {
      product_id: cartitem.product_id
    };
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_remove_this_item')
      .subscribe(async (result) => {
        if (result === 'yes') {
          this.dataLoading.emit(true);
          await this.cartservice.removefromCart(product)
            .then((res) => {
              this.notification.success(`${cartitem.name} has been removed from cart!`);
              this.initializeCart();
            })
            .catch((error) => {
              console.log(error);
              this.notification.error(error.message);
            })
            .finally(() => {
              this.dimmed = false;
              this.dataLoading.emit(false);
            });
        }
      });
  }
  eventHandler(event) {
    event.preventDefault();
  }
  emptycart() {
    this.dimmed = true;
    this.dialog.showConfirmDialog('confirm.are_you_sure_want_to_clear_your_cart')
      .subscribe(async (result) => {
        if (result === 'yes') {
          this.dataLoading.emit(true);
          await this.cartservice.clearCart()
            .then((res) => {
              this.notification.success('Cart is been cleared!');
              this.initializeCart();
            })
            .catch((error) => {
              console.log(error);
              this.notification.error(error.message);
            })
            .finally(() => {
              this.dimmed = false;
              this.dataLoading.emit(false);
            });
        }
      });
  }

  fullscreenstatus(event) {
    if (event) {
      this.height = 412;
    } else {
      this.height = 267;
    }
  }
}

