import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  one: boolean = true;
  two: boolean = false;
  three: boolean = false;
  @Input() product;
  constructor() {}

  ngOnInit() {}
  getnumber(index: number) {
    if (index < 1) return this.one;
    else if (index === 1) return this.two;
    else return this.three;
  }
  changeimage(index: number) {
    if (index < 1) this.changevalue(true, false, false);
    else if (index === 1) this.changevalue(false, true, false);
    else this.changevalue(false, false, true);
  }
  changevalue(one: boolean, two: boolean, three: boolean) {
    this.one = one;
    this.two = two;
    this.three = three;
  }
}
