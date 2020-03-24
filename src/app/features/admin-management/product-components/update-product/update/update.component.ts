import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  state$: any;
  productdata: any;
  constructor(private dialog: ConfirmDialogService, private activateRouter: ActivatedRoute) { }
  category = [
    { name: 'Electronics' },
    { name: 'Mobile' },
    { name: 'MensFashion' },
    { name: 'WomensFashion' }
  ];
  InnerCategory: any;

  selectedcategory = new FormControl('', [Validators.required]);
  selectedinnerCategory = new FormControl('', [Validators.required]);
  productNameFormControl = new FormControl('', [Validators.required]);
  quantityFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.min(1)
  ]);
  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[0-9]*'),
    Validators.min(1)
  ]);
  productDescriptionFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);
  productImage1FormControl = new FormControl('', [Validators.required]);
  productImage2FormControl = new FormControl('');
  productImage3FormControl = new FormControl('');

  ngOnInit() {
    this.state$ = this.activateRouter.paramMap
      .pipe(map(() => window.history.state))
      .subscribe(res => this.productdata = res)
  }

  cancel() {
    if (
      this.selectedcategory.touched ||
      this.productNameFormControl.touched ||
      this.quantityFormControl.touched ||
      this.priceFormControl.touched ||
      this.productDescriptionFormControl.touched ||
      this.productImage1FormControl.touched
    ) {
      this.dialog.showConfirmDialog('Are You Sure Want to Cancel ?').subscribe((result) => {
        if (result === 'yes') {
          this.productDescriptionFormControl.reset();
          this.quantityFormControl.reset();
          this.productNameFormControl.reset();
          this.priceFormControl.reset();
          this.selectedinnerCategory.reset();
          this.selectedcategory.reset();
          this.productImage1FormControl.reset();
        }
      });
    }
  }
  onCategorySelect(event) {
    this.selectedinnerCategory.reset();
    switch (event) {
      case 'Electronics':
        this.InnerCategory = [{ name: 'TV' }, { name: 'Laptop' }, { name: 'Headphones' }];
        break;
      case 'Mobile':
        this.InnerCategory = [
          { name: 'Accessories' },
          { name: 'Tablets' },
          { name: 'Smartphones' }
        ];
        break;
      case 'MensFashion':
        this.InnerCategory = [
          { name: 'T-shirts' },
          { name: 'Shirts' },
          { name: 'Shoes' },
          { name: 'Goggles' }
        ];
        break;
      case 'WomensFashion':
        this.InnerCategory = [
          { name: 'Saree' },
          { name: 'Dress' },
          { name: 'Shoes' },
          { name: 'Watch' },
          { name: 'Nightwear' }
        ];
        break;
    }
  }
  AddProduct() {
    let productdata = {
      name: this.productNameFormControl.value,
      description: this.productDescriptionFormControl.value,
      quantity: this.quantityFormControl.value,
      price: this.priceFormControl.value,
      category: this.selectedcategory.value,
      innercategory: this.selectedinnerCategory.value,
      image1: this.productImage1FormControl.value,
      image2: this.productImage2FormControl.value || '',
      image3: this.productImage3FormControl.value || ''
    };
    console.log(productdata);
  }
}
