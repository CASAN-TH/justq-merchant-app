import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import MaskedInput from "@msafi/angular2-text-mask";
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { ForgotPage } from '../forgot/forgot.page';

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  showPassword: boolean = false;
  constructor(
    private _location: Location,
    private auth: AuthService,
    private router: Router, 
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  close() {
    // this._location.back();
    this.modalController.dismiss();
  }

  login(form) {
    // this.auth.login(form.value).then((user)=>{
    //   if(this.auth.redirectUrl){
    //     this.router.navigateByUrl(this.auth.redirectUrl);
    //   }else{
    //     this.router.navigateByUrl('');
    //   }
    // });
    // this.auth.login(form.value).subscribe(
    //   data => {
    //     this.alertService.presentToast("Logged In");
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   () => {
    //     this.dismissLogin();
    //     this.menu.enable(true);
    //     this.navCtrl.navigateRoot('/app');
    //   }
    // );
  }

  async gotoForgot() {
    // this.router.navigateByUrl("phoneno");
    this.close();
    const forgotModal = await this.modalController.create({
      component: ForgotPage,
    });
    return await forgotModal.present();
  }

  async gotoRegister() {
    // this.router.navigateByUrl("phoneno");
    this.close();
    const registerModal = await this.modalController.create({
      component: RegisterPage,
    });
    return await registerModal.present();
  }
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
