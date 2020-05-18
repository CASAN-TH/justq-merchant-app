import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoptypePageRoutingModule } from './shoptype-routing.module';

import { ShoptypePage } from './shoptype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoptypePageRoutingModule
  ],
  declarations: [ShoptypePage]
})
export class ShoptypePageModule {}
