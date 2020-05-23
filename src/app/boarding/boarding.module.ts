import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoardingPageRoutingModule } from './boarding-routing.module';

import { BoardingPage } from './boarding.page';
import { SetLocationPageModule } from '../setting/set-location/set-location.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoardingPageRoutingModule,
    SetLocationPageModule
  ],
  declarations: [BoardingPage]
})
export class BoardingPageModule {}
