import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Location } from "@angular/common";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  accepted: boolean = false;
  readed: boolean = false;
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

  logScrollStart() {}

  logScrolling() {}
  logScrollEnd() {
    this.readed = true;
  }

  acceptTerm(){
    
  }
}
