import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PolicyPage } from "../auth/policy/policy.page";
import { SetLocationPage } from "../setting/set-location/set-location.page";
import { ShopService } from "../setting/shop.service";
import { Router } from "@angular/router";

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
    private router: Router
  ) {}

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();
    if (this.myShop) {
      this.router.navigateByUrl("/app");
    }
  }

  async registerShop(form) {
    const setLocationModal = await this.modalController.create({
      component: SetLocationPage,
    });
    setLocationModal.onDidDismiss().then((location) => {
      console.log(location);
      if (location.data) {
        form.value.location = location.data;
        console.log(form.value);
        this.shopService.createShop(form.value).subscribe(
          (res) => {
            this.router.navigateByUrl("/app");
          },
          (err) => {},
          () => {}
        );
      }
    });
    return await setLocationModal.present();
  }
}
