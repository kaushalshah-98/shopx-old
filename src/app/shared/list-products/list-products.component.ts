import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ImagePopupService } from '@shared/image-popup/image-popup.service';
import { ProductImage, ProductItem } from '@shared/interfaces';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { CartManagementService } from 'src/app/features/cart-management/cart-service/cart-management.service';
import { WishlistService } from 'src/app/features/user-management/wish-list/wishlist.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @Input() productitems;
  @Input() compare = false;
  totalprice;
  shipping;
  @Output() selectedMobile: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private imagepopup: ImagePopupService,
    private view: QuickViewService,
    public property: PropertyAccessService,
    private wishlistservice: WishlistService,
    private cartservice: CartManagementService,
    private notification: NotificationService,
    private storage: LocalStorageService
  ) {}

  ngOnInit() {}
  openBottomSheet(item) {
    this.imagepopup.openBottomSheet(item);
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  addtocompare(item) {
    this.selectedMobile.emit(item);
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
        () => {}
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
      await this.cartservice
        .addtoCart(product)
        .then((res) => this.notification.success('Item is added To Cart!'))
        .catch((error) => {
          console.log(error);
          this.notification.error(error.message);
        });
      await this.cartservice
        .getCartSize()
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
        });
    }
  }
  updateCart() {}
  removeFromCart() {}
  emptycart() {}
}
