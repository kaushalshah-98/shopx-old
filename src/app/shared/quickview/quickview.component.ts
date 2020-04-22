import { state } from '@angular/animations';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ProductItem } from '@shared/interfaces';
import { WishlistService } from 'src/app/features/user-management/wish-list/wishlist.service';
import { NotificationService } from '@services/notification/notification.service';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { CartManagementService } from 'src/app/features/cart-management/cart-service/cart-management.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  myThumbnail1: string;
  myThumbnail2: string;
  myThumbnail3: string;

  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  productdata: ProductItem;

  constructor(
    public property: PropertyAccessService,
    private wishlistservice: WishlistService,
    private cartservice: CartManagementService,
    private notification: NotificationService,
    private storage: LocalStorageService,
    public dialogRef: MatDialogRef<QuickviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router
  ) {
    this.productdata = data;

    this.myThumbnail1 = data.image[0].imageurl;
    this.myThumbnail2 = data.image[1].imageurl;
    this.myThumbnail3 = data.image[2].imageurl;
  }

  ngOnInit() { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  detailview() {
    this.dialogRef.close();
    this.router.navigateByUrl('/detailview', {
      state: { product_id: this.productdata.product_id }
    });
  }
  addToWishlist(item: ProductItem) {
    if (this.storage.getItem('USER') === null) {
      this.notification.warning('Only Logged in users can add!');
    } else {
      const product = {
        product_id: item.product_id
      };
      this.wishlistservice.addtoWishlist(product).subscribe(
        (res) => {
          if (res.message) {
            this.notification.info('This Item is already in list');
          } else {
            this.notification.success('Item is added To Wishlist!');
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.notification.error(error.message);
        },
        () => { }
      );
    }
  }
  async addToCart(item: ProductItem) {
    if (this.storage.getItem('USER') === null) {
      this.notification.warning('Only Logged in users can add!');
    } else {
      const product = {
        product_id: item.product_id
      };
      await this.cartservice.addtoCart(product)
        .then((res) => this.notification.success('Item is added To Cart!'))
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        })
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
    }
  }
}
