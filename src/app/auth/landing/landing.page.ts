import { Component, OnInit } from "@angular/core";
import { ModalController, LoadingController } from "@ionic/angular";
import { RegisterPage } from "../register/register.page";
import { LoginPage } from "../login/login.page";
import { PolicyPage } from "../policy/policy.page";
import { LineLogin } from "@ionic-native/line-login/ngx";
import { Facebook, FacebookLoginResponse } from "@ionic-native/facebook/ngx";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AlertService } from "src/app/services/alert.service";
import { ShopService } from "src/app/setting/shop.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage implements OnInit {
  myShop: any;
  constructor(
    private router: Router,
    private modalController: ModalController,
    private lineLogin: LineLogin,
    private fb: Facebook,
    private authService: AuthService,
    private alertService: AlertService,
    private shopService: ShopService,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.myShop = await this.shopService.getMyShop();

    console.log(this.myShop);
  }

  async register() {
    const policyModal = await this.modalController.create({
      component: PolicyPage,
    });
    return await policyModal.present();
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

  loginLine() {
    this.lineLogin.initialize({ channel_id: "1654214807" });
    this.lineLogin
      .login()
      .then(async (user: any) => {
        user.shop_id = this.myShop._id;
        const loading = await this.loadingController.create();
        await loading.present();
        this.authService.lineLogin(user).subscribe(
          (data) => {
            loading.dismiss();
            this.alertService.presentToast("Logged In");
          },
          (error) => {
            // console.log(error);
            loading.dismiss();
            this.alertService.presentToast(error.error.message);
          },
          () => {
            this.router.navigateByUrl("/app");
          }
        );
      })
      .catch((error) => console.log(error));
  }

  loginFacebook() {
    this.fb
      .login(["public_profile", "email"])
      .then((res: FacebookLoginResponse) => {
        this.fb
          .api(
            "/me?fields=id,first_name,last_name,picture.width(300).height(300)",
            []
          )
          .then((user) => {
            // this.auth.facebookLogin(user).then(() => {
            //   if (this.auth.redirectUrl) {
            //     this.router.navigateByUrl(this.auth.redirectUrl);
            //   } else {
            //     this.router.navigateByUrl('');
            //   }
            // }).catch(() => {
            //   //this.router.navigateByUrl('phoneno');
            //   this.nextStep("facebook", user);
            // })
          });
      })
      .catch((err) => alert(JSON.stringify(err)));
  }
}
