import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopServicetypePageRoutingModule } from './shop-servicetype-routing.module';

import { ShopServicetypePage } from './shop-servicetype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShopServicetypePageRoutingModule
  ],
  declarations: [ShopServicetypePage]
})
export class ShopServicetypePageModule { }
