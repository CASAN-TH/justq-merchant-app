import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { LoginPageModule } from '../login/login.module';
import { RegisterPageModule } from '../register/register.module';
import { ForgotPageModule } from '../forgot/forgot.module';
import { PolicyPageModule } from '../policy/policy.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule,
    LoginPageModule,
    RegisterPageModule,
    ForgotPageModule,
    PolicyPageModule
  ],
  declarations: [LandingPage]
})
export class LandingPageModule {}
