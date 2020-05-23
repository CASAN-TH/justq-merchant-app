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
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: "app-set-location",
  templateUrl: "./set-location.page.html",
  styleUrls: ["./set-location.page.scss"],
})
export class SetLocationPage {
  map: GoogleMap;
  initialPos: any;
  myShop: any;
  constructor(
    private geolocation: Geolocation,
    private _location: Location,
    private router: Router,
    private shopService: ShopService,
    private alertService: AlertService
  ) {}

  // ngOnInit() {
  //   this.loadMap();
  // }

  ionViewLoaded = false;
  async ionViewDidEnter() {
    this.myShop = await this.shopService.getMyShop();
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
  }

  ionViewDidLoad() {
    console.log(this.initialPos);
    this.loadMap();
  }

  loadMap() {
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: this.initialPos,
        zoom: 14,
        tilt: 30,
      },
    };

    this.map = GoogleMaps.create("map_canvas", mapOptions);

    // let marker: Marker = this.map.addMarkerSync({
    //   title: "Me",
    //   icon: "blue",
    //   // animation: "DROP",
    //   position: this.initialPos,
    // });

    this.map.on(GoogleMapsEvent.CAMERA_MOVE_END).subscribe((params: any[]) => {
      const cameraPosition: any = params[0];
      console.log(cameraPosition);
      this.initialPos = cameraPosition.target;
    });
  }

  close() {
    this._location.back();
  }

  updateLocation() {
    console.log(this.initialPos);
    this.myShop.location = this.initialPos;
    this.shopService.updateShop(this.myShop).subscribe(
      (res) => {
        this.router.navigateByUrl("/app");
      },
      (err) => {
        this.alertService.presentToast(err.error.message);
      }
    );
    
  }
}
