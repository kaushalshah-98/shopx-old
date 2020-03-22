import { Component, Inject } from "@angular/core";
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from "@angular/material";

@Component({
  selector: "app-image-popup",
  templateUrl: "./image-popup.component.html",
  styleUrls: ["./image-popup.component.scss"]
})
export class ImagePopupComponent {
  myThumbnail: string;
  myFullresImage: string;
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<ImagePopupComponent>
  ) {
    this.myThumbnail = data.image;
    this.myFullresImage = data.image;
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
