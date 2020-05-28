import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PolicyPage } from "../auth/policy/policy.page";
import { SetLocationPage } from "../setting/set-location/set-location.page";
import { ShopService } from "../setting/shop.service";
import { Router } from "@angular/router";
import { AlertService } from '../services/alert.service';
import { LoadingController } from '@ionic/angular';
import { Storage } from "@ionic/storage";

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
    private storage: Storage,
    private alertService: AlertService,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.myShop = await this.storage.get("shop");
    if (this.myShop) {
      this.router.navigateByUrl("/app");
    }
  }

  async registerShop(form) {
    const loading = await this.loadingController.create();
    await loading.present();
    this.shopService.createShop(form.value).subscribe(
      (res) => {
        loading.dismiss();
        this.router.navigateByUrl("/set-location");
      },
      (err) => {
        loading.dismiss();
        this.alertService.presentToast(err.error.message);
      }
    );
  }
}
