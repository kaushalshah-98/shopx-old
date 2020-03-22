import { Component, OnInit } from "@angular/core";
import { ConfirmDialogService } from "@shared/confirm-dialog/confirm-dialog.service";

@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
  styleUrls: ["./wish-list.component.scss"]
})
export class WishListComponent implements OnInit {
  wishlistitems = [];
  heading = "YOUR WISH-LIST";
  displayedColumns: string[] = ["image", "name", "price", "action", "delete"];
  dataSource;
  constructor(private dialog: ConfirmDialogService) {}
  removeFromWishlist(wishlistitem) {
    this.dialog
      .showConfirmDialog("Are You Sure Want to Remove this item ?")
      .subscribe(result => {
        if (result === "yes") {
          console.log("removed");
        }
      });
  }
  addTocart(qty, item) {}
  emptywishList() {
    this.dialog
      .showConfirmDialog("Are You Sure Want to Clear Your List ?")
      .subscribe(result => {
        if (result === "yes") {
          console.log("emptied");
        }
      });
  }
  ngOnInit() {
    this.wishlistitems = [
      {
        name: "tshirt",
        price: 40000,
        quantity: 6,
        image:
          "https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg",
        productqty: 50
      },
      {
        name: "tshirt",
        price: 40000,
        quantity: 6,
        image:
          "https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg",
        productqty: 50
      },
      {
        name: "tshirt",
        price: 40000,
        quantity: 6,
        image:
          "https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg",
        productqty: 50
      }
    ];
    this.dataSource = this.wishlistitems;
  }
}
