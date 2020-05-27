import { Component, OnInit } from '@angular/core';
import { ReviewService } from './review.service';
import * as moment from 'moment';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  rate: Number = 1;
  scrollNumber: any;
  reviewData: any;

  created: any

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviewData();
  }
  getReviewData() {
    this.reviewService.getReviewData(0, 10, "12").then((res: any) => {
      this.reviewData = res.data
      console.log(this.reviewData);
      console.log("AA");

    })
  }

  logRatingChange(rating) {
    this.scrollNumber = rating;
    console.log("changed rating: ", rating);
    // do your stuff
  }


  doRefresh(event) {
    console.log('Begin async operation');

    this.getReviewData();
    console.log("BB");
      event.target.complete();
  }
}
