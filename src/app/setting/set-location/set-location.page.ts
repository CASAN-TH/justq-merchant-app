import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Location } from "@angular/common";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  Circle,
  LatLng,
} from "@ionic-native/google-maps/ngx";
import { Router } from "@angular/router";
import { ShopService } from "../shop.service";
import { AlertService } from "src/app/services/alert.service";
import { LoadingController } from "@ionic/angular";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-set-location",
  templateUrl: "./set-location.page.html",
  styleUrls: ["./set-location.page.scss"],
})
export class SetLocationPage {
  map: GoogleMap;
  initialPos: any;
  myShop: any;
  user: any;
  constructor(
    private geolocation: Geolocation,
    private _location: Location,
    private router: Router,
    private authService: AuthService,
    private shopService: ShopService,
    private alertService: AlertService,
    private loadingController: LoadingController
  ) {}

  // ngOnInit() {
  //   this.loadMap();
  // }

  ionViewLoaded = false;
  // async ionViewDidEnter() {
  //   this.myShop = await this.shopService.getMyShop();
  //   let currPos = await this.geolocation.getCurrentPosition();
  //   if (this.myShop && this.myShop.location) {
  //     this.initialPos = this.myShop.location;
  //   } else {
  //     this.initialPos = {
  //       lat: currPos.coords.latitude,
  //       lng: currPos.coords.longitude,
  //     };
  //   }
  //   if (!this.ionViewLoaded) {
  //     this.ionViewLoaded = true;
  //     this.ionViewDidLoad();
  //   }
  // }

  ionViewDidEnter() {
    this.authService.getToken().then(() => {
      this.authService.user().subscribe(
        async (res: any) => {
          console.log(res);
          this.user = res.data;
          this.myShop = await this.shopService.getMyShop(this.user.ref1);
          let currPos = await this.geolocation.getCurrentPosition();
          if (this.myShop && this.myShop.location) {
            this.initialPos = this.myShop.location;
          } else {
            this.initialPos = {
              lat: currPos.coords.latitude,
              lng: currPos.coords.longitude,
            };
          }
          if (!this.ionViewLoaded) {
            this.ionViewLoaded = true;
            this.ionViewDidLoad();
          }
        },
        (error) => {
          // console.log(error);
          this.alertService.presentToast(error.error.message);
        },
        () => {}
      );
    });
  }

  ionViewDidLoad() {
    // console.log(this.initialPos);

    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadingController.create();
    await loading.present();
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.initialPos,
        zoom: 14,
        tilt: 30,
      },
    };
    try {
      this.map = GoogleMaps.create("map_canvas", mapOptions);

      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        () => {
          loading.dismiss();
        },
        (error) => {
          console.log(error);
          loading.dismiss();
        }
      );

      this.map
        .on(GoogleMapsEvent.CAMERA_MOVE_END)
        .subscribe((params: any[]) => {
          const cameraPosition: any = params[0];
          console.log(cameraPosition);
          this.initialPos = cameraPosition.target;
        });
    } catch (error) {
      loading.dismiss();
    }
  }

  close() {
    this._location.back();
  }

  async updateLocation() {
    console.log(this.initialPos);
    const loading = await this.loadingController.create();
    await loading.present();
    this.myShop.location = this.initialPos;
    this.shopService.updateShop(this.myShop).subscribe(
      (res) => {
        loading.dismiss();
        this.router.navigateByUrl("/app");
      },
      (err) => {
        loading.dismiss();
        this.alertService.presentToast(err.error.message);
      }
    );
  }

  ionViewWillLeave() {
    // unset div & visibility on exit
    if (this.map) {
      this.map.setVisible(false);
      this.map.setDiv(null);
    }
  }
}
