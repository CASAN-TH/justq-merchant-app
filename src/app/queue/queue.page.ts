import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { AlertService } from "../services/alert.service";

@Component({
  selector: "app-queue",
  templateUrl: "./queue.page.html",
  styleUrls: ["./queue.page.scss"],
})
export class QueuePage implements OnInit {
  user: any;

  constructor(
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    console.log("ngOnInit");
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        (res: any) => {
          console.log(res);
          this.user = res.data;
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {
          
        }
      );
    });
  }
}
