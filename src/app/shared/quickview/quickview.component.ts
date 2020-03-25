import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  myThumbnail1: string;
  myThumbnail2: string;
  myThumbnail3: string;
  myThumbnail4: string;
  myThumbnail5: string;
  reviewtext: FormControl = new FormControl('');
  reviews = [];
  totalreviewcount: number = 0;
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    public dialogRef: MatDialogRef<QuickviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.myThumbnail1 = data.image;
    this.myThumbnail2 = data.image1;
    this.myThumbnail3 = data.image2;
    this.myThumbnail4 = data.image3;
    this.myThumbnail5 = data.image4;
  }

  ngOnInit() {
    this.reset();
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.reviews = [
        { username: 'kaushal', review: 'It is a good product' },
        { username: 'kaushal', review: 'It is a good product' },
        { username: 'kaushal', review: 'It is a good product' },
        { username: 'DEFAULT', review: 'It is a good product' },
        { username: 'DEFAULT', review: 'It is a good product' },
        { username: 'kaushal', review: 'It is a good product' },
        { username: 'DEFAULT', review: 'It is a good product' }
      ];
      this.totalreviewcount = this.reviews.length;
    }, 3000);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  reset() {
    this.reviewtext.reset();
    this.totalreviewcount = this.reviews.length;
  }
  addreview() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      let item = { username: 'DEFAULT', review: this.reviewtext.value };
      this.reviews.unshift(item);
      this.reset();
    }, 3000);
  }
  isUserReview(username) {
    if (username === 'DEFAULT') {
      return true;
    }
    return false;
  }
  deletereview(review) {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      this.reviews = this.reviews.filter(
        (item) => !(item.review === review.review && item.username === review.username)
      );
      this.reset();
    }, 3000);
  }
}
