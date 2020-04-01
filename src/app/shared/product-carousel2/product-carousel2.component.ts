import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-carousel2',
  templateUrl: './product-carousel2.component.html',
  styleUrls: ['./product-carousel2.component.scss']
})
export class ProductCarousel2Component implements OnInit {
  @Input() item1: any;
  @Input() item2: any;
  @Input() item3: any;
  constructor() { }

  ngOnInit() {
  }

}
