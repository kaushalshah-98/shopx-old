import { Component, OnInit } from '@angular/core';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
import { CartItem } from '@shared/interfaces';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.scss']
})
export class ReciptComponent implements OnInit {
  cartitems: CartItem[];
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
  dataSource;
  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    this.cartitems = [
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
    this.dataSource = this.cartitems;
  }
  downloadPdf() {
    const data = document.getElementById('recipt');
    html2canvas(data, {
      scrollY: -window.scrollY,
      backgroundColor: '#ffffff'
    }).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('l', 'mm', 'a4'); // Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 20, 10, 250, 200);
      pdf.save('recipt.pdf');
    });
  }
  downloadImage() {
    const data = document.getElementById('recipt');
    html2canvas(data, {
      scrollY: -window.scrollY,
      backgroundColor: '#ffffff'
    }).then((canvas) => {
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.download = 'recipt.png';
      link.href = canvas.toDataURL('image/png');
      link.target = '_blank';
      link.click();
    });
  }
}
