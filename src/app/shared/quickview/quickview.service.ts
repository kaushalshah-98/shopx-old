import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuickviewComponent } from './quickview.component';

@Injectable()
export class QuickViewService {
  constructor(private dialog: MatDialog) {}

  showQuickview(productdata) {
    const dialogRef = this.dialog.open(QuickviewComponent, {
      data: productdata
    });
  }
}
