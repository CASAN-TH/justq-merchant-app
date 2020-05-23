import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Location } from "@angular/common";
import { ModalController } from "@ionic/angular";
import { AlertService } from 'src/app/services/alert.service';
import { ShopService } from 'src/app/setting/shop.service';

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  accepted: boolean = false;
  readed: boolean = false;
  showPassword: boolean = false;
  myShop: any;
  constructor(
    private _location: Location,
    private auth: AuthService,
    private router: Router,
    private alertService: AlertService,
    private shopService: ShopService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();

    console.log(this.myShop);
  }

  close() {
    // this._location.back();
    this.modalController.dismiss();
  }

  register(form) {
    form.value.ref1=this.myShop._id;
    this.auth.register(form.value).subscribe(
      (data) => {
        this.alertService.presentToast("Logged In");
      },
      (error) => {
        // console.log(error);
        this.alertService.presentToast(error.error.message);
      },
      () => {
        this.close();
        this.router.navigateByUrl("/app");
      }
    );
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
