import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {
  displayimage: string;
  @Input() product;
  constructor() {}

  ngOnInit() {
    console.log(this.product);

    this.displayimage = this.product[0].imageurl;
  }
  changeimage(imageurl) {
    this.displayimage = imageurl;
  }
}
