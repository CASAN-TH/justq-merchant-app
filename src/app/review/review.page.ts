import { Component, OnInit } from "@angular/core";
import { ReviewService } from "./review.service";
import { AlertService } from "../services/alert.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-review",
  templateUrl: "./review.page.html",
  styleUrls: ["./review.page.scss"],
})
export class ReviewPage implements OnInit {
  reviewData: any;
  myShop: any;
  user: any;

  constructor(
    private reviewService: ReviewService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        (res: any) => {
          console.log(res);
          this.user = res.data;
          this.getReviewData();
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {}
      );
    });
    
  }

  async getReviewData() {
    this.reviewData = await this.reviewService.getReviewData(0, 10, this.user.ref1);
  }

  async doRefresh(event) {
    this.reviewData = await this.reviewService.getReviewData(0, 10, "");
    event.target.complete();
  }
}
