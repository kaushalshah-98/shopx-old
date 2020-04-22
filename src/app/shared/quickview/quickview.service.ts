import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuickviewComponent } from './quickview.component';
import { ProductManagementService } from 'src/app/features/product-management/product-service/product-management.service';
import { ProductItem } from '@shared/interfaces';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@services/notification/notification.service';

@Injectable()
export class QuickViewService {
  productdata: ProductItem;
  constructor(
    private dialog: MatDialog,
    private productservice: ProductManagementService,
    private notification: NotificationService,
  ) { }

  showQuickview(productdata: ProductItem) {
    this.productservice.getproduct(productdata.product_id).subscribe(
      (res) => (this.productdata = res),
      (error: HttpErrorResponse) => {
        console.log(error);
        this.notification.error(error.message);
      },
      () => {
        const dialogRef = this.dialog.open(QuickviewComponent, {
          data: this.productdata
        });
      }
    );
  }
}
