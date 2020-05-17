import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { ModalController } from '@ionic/angular';

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.page.html",
  styleUrls: ["./forgot.page.scss"],
})
export class ForgotPage implements OnInit {
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
}
