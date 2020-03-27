import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fetch-dress',
  template: `
    <app-jumbotron [Heading]="'menu_item.dress'"></app-jumbotron>
    <div class="product-list-page">
      <app-spinner [loading]="dataLoading"></app-spinner>
      <app-list-products [productitems]="productitems"></app-list-products>
    </div>
  `,
  styles: []
})
export class FetchDressComponent implements OnInit {
  productitems: { name: string; image: string; price: number }[];
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  constructor() {}

  ngOnInit() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.productitems = [
        {
          name: 'Mens-Tshirts',
          image:
            'https://rukminim1.flixcart.com/image/332/398/jp780i80/t-shirt/u/8/t/s-tnvhdfulabstract1-tripr-original-imafbdarnwhfh7uu.jpeg?q=50',
          price: 400
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50',
          price: 600
        },
        {
          name: 'Mens-Tshirts',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg',
          price: 700
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C',
          price: 800
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://n4.sdlcdn.com/imgs/c/b/k/Tinted-Grey-Henley-T-Shirt-SDL844815789-1-6cd00.jpg',
          price: 1000
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://n1.sdlcdn.com/imgs/b/2/j/Leana-Grey-Henley-T-Shirt-SDL041507058-1-e82bd.jpg',
          price: 600
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://www.onlinebazar.com/image/cache/catalog/Product%20Images/T-Shirt/Mens-Solid-Mandarin-Collar-Full-Sleeve-T-Shirt-1000x1000.jpg',
          price: 500
        },
        {
          name: 'Mens-Tshirts',
          image:
            'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
          price: 1200
        }
      ];
    }, 1000);
  }
}
