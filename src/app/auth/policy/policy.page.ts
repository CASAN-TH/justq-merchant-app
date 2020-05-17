import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.page.html',
  styleUrls: ['./policy.page.scss'],
})
export class PolicyPage implements OnInit {
  accepted: boolean = false;
  readed: boolean = false;
  constructor(
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

  async acceptTerm(){
    this.close();
    const registerModal = await this.modalController.create({
      component: RegisterPage,
    });
    return await registerModal.present();
  }

}
