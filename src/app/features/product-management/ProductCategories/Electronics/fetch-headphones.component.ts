import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fetch-headphones',
  template: `
    <div class="list-product-style">
      <app-jumbotron [Heading]="'menu_item.headphones'"></app-jumbotron>
      <div class="product-list-page">
        <app-filter-input></app-filter-input>
        <app-spinner [loading]="dataLoading"></app-spinner>
        <app-list-products [productitems]="productitems"></app-list-products>
      </div>
    </div>
  `,
  styles: []
})
export class FetchHeadphonesComponent implements OnInit {
  productitems: [
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 400;
      details: {
        Comfort: 'Fashionably cotton';
        Fitting: 'Fitting type is slim fit';
        Ocassion: 'Casual';
        Quality: 'All garments are subjected to the following tests fabric dimensional stability test and print quality inspection for colors and wash fastness Light weight fabric sweeps sweat away from your skin and helps regulate body temperature';
        'Care Instructions': 'Wash with mild detergent, do not bleach, dry in shade';
        Sizes: 'SL,M,L,XL,XXL,XXL';
        'Made in ': 'India';
      };
      description: 'Van Heusen’s sub brand Van Heusen Sport is a sport inspired casual wear that’s a perfect amalgamation of modernity and the iconic 60s Ivy League look. Somewhere between smart and casual, the line is made up of shirts, fine-knits, laundered chinos and jackets that channel a nonchalant look. Styled with sporting details, this collection is perfect for your off duty days. For a casual day out you can buy a Van Heusen T-shirt and pair it up with washed chinos and loafers for an effortlessly preppy look.';
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://rukminim1.flixcart.com/image/332/398/jtn9bww0/t-shirt/5/f/c/s-hm-1001-maroon-black-helmont-original-imafdfvvz65ab7vm.jpeg?q=50';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 600;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 700;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 800;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://n4.sdlcdn.com/imgs/c/b/k/Tinted-Grey-Henley-T-Shirt-SDL844815789-1-6cd00.jpg';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 1000;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://n1.sdlcdn.com/imgs/b/2/j/Leana-Grey-Henley-T-Shirt-SDL041507058-1-e82bd.jpg';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 600;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://www.onlinebazar.com/image/cache/catalog/Product%20Images/T-Shirt/Mens-Solid-Mandarin-Collar-Full-Sleeve-T-Shirt-1000x1000.jpg';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 500;
    },
    {
      name: 'Mens-Tshirts';
      image: [
        {
          imageurl: 'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg';
        },
        { imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg' },
        {
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C';
        }
      ];
      price: 1200;
    }
  ];
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);
  constructor() {}

  ngOnInit() {
    document.getElementById('mainsearch').style.visibility = 'hidden';
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.productitems = [
        {
          name: 'Mens-Tshirts',
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
          price: 600
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 700
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 800
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl:
                'https://n4.sdlcdn.com/imgs/c/b/k/Tinted-Grey-Henley-T-Shirt-SDL844815789-1-6cd00.jpg'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 1000
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl:
                'https://n1.sdlcdn.com/imgs/b/2/j/Leana-Grey-Henley-T-Shirt-SDL041507058-1-e82bd.jpg'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 600
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl:
                'https://www.onlinebazar.com/image/cache/catalog/Product%20Images/T-Shirt/Mens-Solid-Mandarin-Collar-Full-Sleeve-T-Shirt-1000x1000.jpg'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 500
        },
        {
          name: 'Mens-Tshirts',
          image: [
            {
              imageurl:
                'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg'
            },
            {
              imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81YIy8FpWhL._UY606_.jpg'
            },
            {
              imageurl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREpnah8xL_N1PAVkQKLYZrjcpaV47fV_K6aD9sL_YfsaW1YE6C'
            }
          ],
          price: 1200
        }
      ];
    }, 1000);
  }
}
