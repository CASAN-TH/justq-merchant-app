import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ShopService } from "../shop.service";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shop-edit",
  templateUrl: "./shop-edit.page.html",
  styleUrls: ["./shop-edit.page.scss"],
})
export class ShopEditPage implements OnInit {
  shop: any = {};
  user: any;

  constructor(
    private _location: Location,
    private router: Router,
    private shopService: ShopService,
    private authService: AuthService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        async (res: any) => {
          console.log(res);
          this.user = res.data;
          this.shop = await this.shopService.getMyShop(this.user.ref1);
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => { }
      );
    });
  }

  saveShop() {
    // console.log(this.shop);
    this.shopService.updateShop(this.shop).subscribe((res: any) => {
      console.log(res);
      // this._location.back();
      this.router.navigateByUrl("/app/tabs/setting");
    });
  }

  goback() {
    this._location.back();
    // this.router.navigateByUrl("/app/tabs/queue")
  }
}
