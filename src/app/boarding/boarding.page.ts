import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PolicyPage } from "../auth/policy/policy.page";
import { SetLocationPage } from "../setting/set-location/set-location.page";
import { ShopService } from "../setting/shop.service";
import { Router } from "@angular/router";
import { AlertService } from '../services/alert.service';

@Component({
  selector: "app-boarding",
  templateUrl: "./boarding.page.html",
  styleUrls: ["./boarding.page.scss"],
})
export class BoardingPage implements OnInit {
  myShop: any;
  constructor(
    private modalController: ModalController,
    private shopService: ShopService,
    private router: Router,
    private alertService: AlertService
  ) {}

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();
    if (this.myShop) {
      this.router.navigateByUrl("/app");
    }
  }

  async registerShop(form) {
    this.shopService.createShop(form.value).subscribe(
      (res) => {
        this.router.navigateByUrl("/set-location");
      },
      (err) => {
        this.alertService.presentToast(err.error.message);
      }
    );
  }
}
