import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

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

const products = [
  {
    name: 'shirt',
    price: 50000,
    quantity: 1,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 50,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'tshirt',
    price: 40000,
    quantity: 6,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 50,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'tv',
    price: 500000,
    quantity: 6,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 90,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'top',
    price: 500,
    quantity: 6,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 10,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'earphone',
    price: 800,
    quantity: 6,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 20,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'mobile',
    price: 60000,
    quantity: 36,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 30,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    name: 'samsung',
    price: 5000,
    quantity: 6,
    category: 'MensFashion',
    innercategory: 'shirt',
    image:
      'https://img.looksgud.com/upload/item-image/576/ccsy/ccsy-maniac-maniac-mens-fullsleeve-round-neck-dark-grey-cotton_500x500_1.jpg',
    productqty: 40,
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }
];
