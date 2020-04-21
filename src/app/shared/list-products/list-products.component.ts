import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalStorageService } from '@services/local-storage/local-storage.service';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ImagePopupService } from '@shared/image-popup/image-popup.service';
import { ProductItem } from '@shared/interfaces';
import { QuickViewService } from '@shared/quickview/quickview.service';
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
    private property: PropertyAccessService,
    private wishlistservice: WishlistService,
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
    console.log(this.storage.getItem('USER'));
    if (this.storage.getItem('USER') === null) {
      this.notification.warning('Only Logged in users can add!');
    } else {
      const product = {
        product_id: item.product_id
      };
      this.wishlistservice.addtoWishlist(product).subscribe(
        (res) => {
          console.log(res);
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
  updateCart() {}
  removeFromCart() {}
  emptycart() {}
}
