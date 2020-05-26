import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert.service";
import { ShopService } from "../shop.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.page.html",
  styleUrls: ["./shop.page.scss"],
})
export class ShopPage implements OnInit {
  myShop: any;
  user: any;
  constructor(
    private authService: AuthService,
    private shopService: ShopService,
    private router: Router,
    private alertService: AlertService
  ) {
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
        () => {}
      );
    });
  }

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();
    
  }

  logout() {
    this.authService.logout().then((res: any) => {
      console.log(res);
      this.alertService.presentToast("Logged Out");
      this.router.navigateByUrl("/app");
    });
  }

  openHours() {
    console.log("openHours");
    this.router.navigateByUrl("/shop-register");
  }

  gotoLocation() {
    this.router.navigateByUrl("/set-location");
  }
}
