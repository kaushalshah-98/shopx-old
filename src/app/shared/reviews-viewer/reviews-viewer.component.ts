import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductReview } from '@shared/interfaces';
import { PropertyAccessService } from '@services/propert-access/property-access.service';
@Component({
  selector: 'app-reviews-viewer',
  templateUrl: './reviews-viewer.component.html',
  styleUrls: ['./reviews-viewer.component.scss']
})
export class ReviewsViewerComponent implements OnInit {
  totalreviewcount: number = 0;
  reviews: ProductReview[];
  reviewtext: FormControl = new FormControl('');
  dataLoading: EventEmitter<boolean> = new EventEmitter(false);

  constructor(private property: PropertyAccessService) {}

  ngOnInit() {
    this.dataLoading.emit(false);
    this.reviews = [
      { username: 'kaushal', name: 'kaushal', review: 'It is a good product' },
      { username: 'kaushal', name: 'kaushal', review: 'It is a good product' },
      { username: 'kaushal', name: 'kaushal', review: 'It is a good product' },
      { username: 'DEFAULT', name: 'DEFAULT', review: 'It is a good product' },
      { username: 'DEFAULT', name: 'DEFAULT', review: 'It is a good product' },
      { username: 'kaushal', name: 'kaushal', review: 'It is a good product' },
      { username: 'DEFAULT', name: 'DEFAULT', review: 'It is a good product' }
    ];
    this.totalreviewcount = this.reviews.length;
  }
  addreview() {
    this.dataLoading.emit(true);
    setTimeout(() => {
      this.dataLoading.emit(false);
      let item = { username: 'DEFAULT', name: 'DEFAULT', review: this.reviewtext.value };
      this.reviews.unshift(item);
      this.reset();
    }, 3000);
  }
  reset() {
    this.reviewtext.reset();
    this.totalreviewcount = this.reviews.length;
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
