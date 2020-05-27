import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import MaskedInput from "@msafi/angular2-text-mask";
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ForgotPage } from '../forgot/forgot.page';
import { AlertService } from 'src/app/services/alert.service';
import { ShopService } from 'src/app/setting/shop.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  showPassword: boolean = false;
  myShop: any;
  constructor(
    private _location: Location,
    private auth: AuthService,
    private router: Router,
    private alertService: AlertService,
    private shopService: ShopService,
    private modalController: ModalController
  ) { }

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();

    console.log(this.myShop);
  }

  close() {
    // this._location.back();
    this.modalController.dismiss();
  }

  login(form) {
    form.value.ref1 = this.myShop ? this.myShop._id : null;
    this.auth.login(form.value).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error => {
        // console.log(error);
        this.alertService.presentToast(error.error.message);
      },
      () => {
        this.close();
        this.router.navigateByUrl('/app');
      }
    );
  }

  async gotoForgot() {
    // this.router.navigateByUrl("phoneno");
    this.close();
    const forgotModal = await this.modalController.create({
      component: ForgotPage,
    });
    return await forgotModal.present();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
