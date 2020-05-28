import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert.service";
import { ShopService } from "../shop.service";
import { Location } from "@angular/common";

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
    private alertService: AlertService,
    private _location: Location,
  ) {
    
  }
  

  // async ngOnInit() {
  //   this.myShop = await this.shopService.getMyShop();
  //   console.log(this.myShop);
  // }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        async (res: any) => {
          console.log(res);
          this.user = res.data;
          this.myShop = await this.shopService.getMyShop(this.user.ref1);
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {}
      );
    });
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

  shopEdit() {
    console.log("shopEdit");
    this.router.navigateByUrl("/shop-edit");
  }

  shopServiceType(){
    this.router.navigateByUrl("/shop-servicetype");
  }

  gotoLocation() {
    this.router.navigateByUrl("/set-location");
  }
}
