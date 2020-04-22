import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { NotificationService } from '@services/notification/notification.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { ProductItem } from '@shared/interfaces';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { CartManagementService } from '../../cart-management/cart-service/cart-management.service';
import { WishlistService } from './wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit, AfterViewInit {
  heading = 'YOUR WISH-LIST';
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dataSource = new MatTableDataSource<ProductItem>();
  displayedColumns: string[] = ['image', 'name', 'price', 'action', 'delete'];
  height = 320;
  dimmed: boolean;
  constructor(
    private dialog: ConfirmDialogService,
    private view: QuickViewService,
    public property: PropertyAccessService,
    private cartservice: CartManagementService,
    private wishlistservice: WishlistService,
    private notification: NotificationService
  ) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
    this.fullscreenstatus(this.property.fullscreen);
    this.initializeWishList();
  }
  initializeWishList() {
    this.dimmed = true;
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.wishlistservice.getWishlistItems().subscribe(
        (res) => {
          if (res === null || res === undefined) {
            this.notification.warning('Check Your Network!');
            this.notification.info('Try to reload the page!');
          } else {
            this.dataSource.data = res;
          }
        },
        (error: HttpErrorResponse) => {
          this.dataLoading.emit(false);
          console.log(error);
          this.dimmed = false;
          this.notification.error(error.message);
        },
        () => {
          this.dimmed = false;
          this.dataLoading.emit(false);
        }
      );
    }, 1000);
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  removeFromWishlist(item: ProductItem) {
    this.dimmed = true;
    const product = {
      product_id: item.product_id
    };
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_remove_this_item')
      .subscribe((result) => {
        if (result === 'yes') {
          this.dataLoading.emit(true);
          this.wishlistservice.updateWishlist(product).subscribe(
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
              this.notification.success('Item is Removed From list!');
              this.initializeWishList();
            }
          );
        }
      });
  }
  async addToCart(item: ProductItem) {
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

  emptywishList() {
    this.dimmed = true;
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_clear_your_list')
      .subscribe((result) => {
        if (result === 'yes') {
          this.dataLoading.emit(true);
          this.wishlistservice.clearWishlist().subscribe(
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
              this.notification.success('List is been cleared!');
              this.initializeWishList();
            }
          );
        }
      });
  }

  fullscreenstatus(event) {
    if (event) {
      this.height = 465;
    } else {
      this.height = 320;
    }
  }
}
