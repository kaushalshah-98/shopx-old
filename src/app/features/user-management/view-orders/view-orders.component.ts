import { Component, OnInit } from "@angular/core";
import { QuickViewService } from "@shared/quickview/quickview.service";
import { ConfirmDialogService } from "@shared/confirm-dialog/confirm-dialog.service";

@Component({
  selector: "app-view-orders",
  templateUrl: "./view-orders.component.html",
  styleUrls: ["./view-orders.component.scss"]
})
export class ViewOrdersComponent implements OnInit {
  orderitems;
  heading = "YOUR ORDERS";
  constructor(
    private view: QuickViewService,
    private dialog: ConfirmDialogService
  ) {}

  ngOnInit() {
    this.orderitems = [
      {
        name: "tshirt",
        price: 40000,
        quantity: 6,
        date: "8 May",
        image:
          "https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg"
      },
      {
        name: "tshirt",
        price: 40000,
        quantity: 6,
        date: "8 May",
        image:
          "https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg"
      }
    ];
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  cancelOrder(item) {
    this.dialog
      .showConfirmDialog("Are You Sure Want to Cancel This Order ?")
      .subscribe(result => {
        if (result === "yes") {
          console.log("emptied");
        }
      });
  }
}
