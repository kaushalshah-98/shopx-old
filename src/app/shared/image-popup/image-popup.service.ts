import { Injectable } from '@angular/core';
import { ImagePopupComponent } from './image-popup.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Injectable()
export class ImagePopupService {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(product): void {
    this.bottomSheet.open(ImagePopupComponent, {
      data: product
    });
  }
}
