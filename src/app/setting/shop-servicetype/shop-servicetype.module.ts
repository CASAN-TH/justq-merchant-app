import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopServicetypePageRoutingModule } from './shop-servicetype-routing.module';

import { ShopServicetypePage } from './shop-servicetype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopServicetypePageRoutingModule
  ],
  declarations: [ShopServicetypePage]
})
export class ShopServicetypePageModule {}
