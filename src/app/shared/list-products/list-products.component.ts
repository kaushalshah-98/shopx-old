import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ImagePopupService } from '@shared/image-popup/image-popup.service';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { PropertyAccessService } from '@services/propert-access/property-access.service';

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
    private property: PropertyAccessService
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
  addToWishlit(item) {}
  updateCart() {}
  removeFromCart() {}
  emptycart() {}
}
