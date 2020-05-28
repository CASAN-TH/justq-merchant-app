import { Component, OnInit } from "@angular/core";
import { ShopService } from "../shop.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { AuthService } from "src/app/auth/auth.service";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "app-shop-register",
  templateUrl: "./shop-register.page.html",
  styleUrls: ["./shop-register.page.scss"],
})
export class ShopRegisterPage implements OnInit {
  shop: any = {};
  user: any;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService,
    private _location: Location
  ) {}

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        async (res: any) => {
          console.log(res);
          this.user = res.data;
          this.shop = await this.shopService.getMyShop(this.user.ref1);
          if (!this.shop.openhours || this.shop.openhours.length === 0) {
            // console.log("ture");
            this.shop.openhours = [
              {
                seq: 1,
                dayofweek: "จันทร์",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 2,
                dayofweek: "อังคาร",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 3,
                dayofweek: "พุธ",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 4,
                dayofweek: "พฤหัสบดี",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 5,
                dayofweek: "ศุกร์",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 6,
                dayofweek: "เสาร์",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
              {
                seq: 7,
                dayofweek: "อาทิตย์",
                isopen: true,
                opentime: [
                  {
                    start: "08:30",
                    end: "18:00",
                  },
                ],
              },
            ];
            // console.log(this.shop);
          }
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {}
      );
    });
  }

  createShop() {
    // console.log(this.shop);
    this.shopService.updateShop(this.shop).subscribe((res: any) => {
      console.log(res);
      this._location.back();
      // this.router.navigateByUrl('/set-location');
    });
  }

  goBackClick() {
    this._location.back();
  }
}
