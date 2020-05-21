import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopRegisterPageRoutingModule } from './shop-register-routing.module';

import { ShopRegisterPage } from './shop-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopRegisterPageRoutingModule
  ],
  declarations: [ShopRegisterPage]
})
export class ShopRegisterPageModule {}
