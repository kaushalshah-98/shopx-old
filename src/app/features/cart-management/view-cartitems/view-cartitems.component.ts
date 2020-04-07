import { Component, OnInit, ViewChild } from '@angular/core';
import { SweetmessageService } from '@services/sweetalert/sweetmessage.service';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { QuickViewService } from '@shared/quickview/quickview.service';
import { CartItem } from '@shared/interfaces';

@Component({
  selector: 'app-view-cartitems',
  templateUrl: './view-cartitems.component.html',
  styleUrls: ['./view-cartitems.component.scss']
})
export class ViewCartitemsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price', 'action', 'delete'];
  dataSource;
  totalprice;
  shipping;
  constructor(
    private sweetalert: SweetmessageService,
    private dialog: ConfirmDialogService,
    private view: QuickViewService
  ) {}

  ngOnInit() {
    this.initializeCart();
  }
  initializeCart() {
    this.dataSource = new MatTableDataSource(cartitems);
    this.dataSource.sort = this.sort;
  }
  quickview(item) {
    this.view.showQuickview(item);
  }
  addToWishlit() {}
  updateCart(qty, cartitem) {
    console.log(qty);
  }
  removeFromCart(cartitem) {
    console.log(cartitem);
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_remove_this_item')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('removed');
        }
      });
  }
  eventHandler(event) {
    event.preventDefault();
  }
  emptycart() {
    this.dialog
      .showConfirmDialog('confirm.are_you_sure_want_to_empty_your_cart')
      .subscribe((result) => {
        if (result === 'yes') {
          console.log('emptied');
        }
      });
  }
}

const cartitems: CartItem[] = [
  {
    name: 'tshirt',
    price: 4000,
    quantity: 6,
    productqty: 50,
    category: 'MensFashion',
    innercategory: 'Shirt',
    details: {
      Comfort: 'Fashionably cotton',
      Fitting: 'Fitting type is slim fit',
      Ocassion: 'Casual',
      Quality:
        'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
      'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
      Sizes: 'SL,M,L,XL,XXL,XXL',
      'Made in ': 'India'
    },
    description:
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.',
    image: [
      {
        imageurl:
          'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
      },
      {
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
      },
      {
        imageurl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
      }
    ]
  },
  {
    name: 'tshirt',
    price: 4000,
    quantity: 6,
    productqty: 50,
    category: 'MensFashion',
    innercategory: 'Shirt',
    details: {
      Comfort: 'Fashionably cotton',
      Fitting: 'Fitting type is slim fit',
      Ocassion: 'Casual',
      Quality:
        'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
      'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
      Sizes: 'SL,M,L,XL,XXL,XXL',
      'Made in ': 'India'
    },
    description:
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.',
    image: [
      {
        imageurl:
          'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
      },
      {
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
      },
      {
        imageurl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
      }
    ]
  },
  {
    name: 'tshirt',
    price: 4000,
    quantity: 6,
    productqty: 50,
    category: 'MensFashion',
    innercategory: 'Shirt',
    details: {
      Comfort: 'Fashionably cotton',
      Fitting: 'Fitting type is slim fit',
      Ocassion: 'Casual',
      Quality:
        'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature',
      'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade',
      Sizes: 'SL,M,L,XL,XXL,XXL',
      'Made in ': 'India'
    },
    description:
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.',
    image: [
      {
        imageurl:
          'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50'
      },
      {
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
      },
      {
        imageurl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
      }
    ]
  }
];
