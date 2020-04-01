import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.scss']
})
export class ReciptComponent implements OnInit {

  cartitems = [];
  displayedColumns: string[] = ['image', 'name', 'quantity', 'price'];
  dataSource; constructor() { }

  ngOnInit() {
    this.cartitems = [
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 50
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 50
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 50
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 50
      },
      {
        name: 'tshirt',
        price: 40000,
        quantity: 6,
        image:
          'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
        productqty: 50
      }
    ];
    this.dataSource = this.cartitems;
  }
  downloadPdf() {
    let data = document.getElementById('recipt');
    html2canvas(data, {
      scrollY: -window.scrollY, backgroundColor: '#ffffff'
    }).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('l', 'mm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 20, 10, 250, 200);
      pdf.save('recipt.pdf');
    });
  }
  downloadImage() {
    let data = document.getElementById('recipt');
    html2canvas(data,
      {
        scrollY: -window.scrollY,
        backgroundColor: '#ffffff',
      }
    ).then(canvas => {
      let link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "recipt.png";
      link.href = canvas.toDataURL("image/png");
      link.target = '_blank';
      link.click();
    });
  }
}
