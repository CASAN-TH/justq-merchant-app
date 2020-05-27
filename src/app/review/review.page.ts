import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  rate: Number = 1;
  scrollNumber: any;
  reviewData: any;

  constructor() { }

  ngOnInit() {
    // console.log(rate);
    this.reviewData = {
      "userReview": [
        {
          "fullname": "กฤษตฤณ เทียนช้าง",
          "profileimg": "https://pub.thisshop.com/shop/customer/head/A8443F8F2CE74277BFD2A0C85068674F/ec004bd3-ba5d-4f92-a660-f8d8c58d4d8e.jpg",
          "rating": 3.5,
          "date": "12/11/2019"
        },
        {
          "name": "ธนายุต ผินสุวรรณ",
          "profileimg": "https://pub.thisshop.com/shop/customer/head/A8443F8F2CE74277BFD2A0C85068674F/ec004bd3-ba5d-4f92-a660-f8d8c58d4d8e.jpg",
          "rating": 2.5,
          "date": "31/11/2019"
        },
        {
          "name": "ปรพจน์ สุปัญญา",
          "profileimg": "https://pub.thisshop.com/shop/customer/head/A8443F8F2CE74277BFD2A0C85068674F/ec004bd3-ba5d-4f92-a660-f8d8c58d4d8e.jpg",
          "rating": 1.5,
          "date": "10/12/2019"
        },
        {
          "name": "ธีรศักดิ์ ทับฤทธิ์",
          "profileimg": "https://pub.thisshop.com/shop/customer/head/A8443F8F2CE74277BFD2A0C85068674F/ec004bd3-ba5d-4f92-a660-f8d8c58d4d8e.jpg",
          "rating": 4.5,
          "date": "10/12/2019"
        },
        {
          "name": "แมว จิรายุ",
          "profileimg": "https://pub.thisshop.com/shop/customer/head/A8443F8F2CE74277BFD2A0C85068674F/ec004bd3-ba5d-4f92-a660-f8d8c58d4d8e.jpg",
          "rating": 5,
          "date": "10/12/2019"
        }
      ]
    }
  }

  logRatingChange(rating) {
    this.scrollNumber = rating;
    console.log("changed rating: ", rating);
    // do your stuff
  }
}
