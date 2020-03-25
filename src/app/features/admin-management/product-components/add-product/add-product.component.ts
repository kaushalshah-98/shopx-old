import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from '@shared/confirm-dialog/confirm-dialog.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  isDisabled: boolean = true;
  constructor(private dialog: ConfirmDialogService, private formBuilder: FormBuilder
  ) { }
  category = [
    { name: 'Electronics' },
    { name: 'Mobile' },
    { name: 'MensFashion' },
    { name: 'WomensFashion' }
  ];
  InnerCategory = [];
  addproductform: FormGroup;

  ngOnInit() {
    this.addproductform = this.formBuilder.group({
      selectedcategory: ['', [Validators.required]],
      selectedinnerCategory: ['', [Validators.required]],
      productNameFormControl: ['', [Validators.required]],
      quantityFormControl: ['', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.min(1)
      ]],
      priceFormControl: ['', [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.min(1)
      ]],
      productDescriptionFormControl: ['', [
        Validators.required,
        Validators.minLength(10)
      ]],
      productImage1FormControl: ['', [Validators.required]],
      productImage2FormControl: [''],
      productImage3FormControl: [''],
    });
  }
  public hasError(controlName: string, errorName: string) {
    return this.addproductform.controls[controlName].hasError(errorName);
  }
  cancel() {
    if (this.addproductform.touched) {
      this.dialog.showConfirmDialog('Are You Sure Want to Cancel ?').subscribe((result) => {
        if (result === 'yes') {
          this.addproductform.reset();
        }
      });
    }
  }
  onCategorySelect(event) {
    this.isDisabled = false;
    this.addproductform.controls.selectedinnerCategory.reset();
    switch (event.value) {
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
      name: this.addproductform.controls.productNameFormControl.value,
      description: this.addproductform.controls.productDescriptionFormControl.value,
      quantity: this.addproductform.controls.quantityFormControl.value,
      price: this.addproductform.controls.priceFormControl.value,
      category: this.addproductform.controls.selectedcategory.value,
      innercategory: this.addproductform.controls.selectedinnerCategory.value,
      image1: this.addproductform.controls.productImage1FormControl.value,
      image2: this.addproductform.controls.productImage2FormControl.value || '',
      image3: this.addproductform.controls.productImage3FormControl.value || ''
    };
    console.log(productdata);

  }
}
