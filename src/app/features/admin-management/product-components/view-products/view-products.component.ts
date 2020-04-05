import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductItem } from '@shared/interfaces';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ViewProductsComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  dataSource: any;
  pageSizeOptions: number[] = [10, 20, 50, 100];
  columnsToDisplay = ['image', 'name', 'quantity', 'price', 'action'];
  expandedElement: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.dataSource = new MatTableDataSource(products);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 3000);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  updateProduct(product) {
    console.log(product);
    this.router.navigateByUrl('/admin/update', { state: product });
  }
  removeProduct(product) {
    console.log(product);
  }
}

const products: ProductItem[] = [
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
  {
    name: 'Mens-Tshirts',
    category: 'MensFashion',
    innercategory: 'Shirt',
    quantity: 40,
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
    ],
    price: 400,
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
      'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.'
  },
];
