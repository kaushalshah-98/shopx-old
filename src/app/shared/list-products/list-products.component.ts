import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { ImagePopupService } from "@shared/image-popup/image-popup.service";
import { QuickViewService } from "@shared/quickview/quickview.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.scss"]
})
export class ListProductsComponent implements OnInit {
  @Input() productitems;
  totalprice;
  shipping;
  constructor(
    private imagepopup: ImagePopupService,
    private view: QuickViewService
  ) {}

  ngOnInit() {}
  openBottomSheet(item) {
    this.imagepopup.openBottomSheet(item);
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  addToWishlit(item) {}
  updateCart() {}
  removeFromCart() {}
  emptycart() {}
}
