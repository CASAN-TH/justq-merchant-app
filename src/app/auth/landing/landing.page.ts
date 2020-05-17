import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { LoginPage } from '../login/login.page';
import { PolicyPage } from '../policy/policy.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {
  }

  async register() {
    const policyModal = await this.modalController.create({
      component: PolicyPage
    });
    return await policyModal.present();
  }

  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

}
