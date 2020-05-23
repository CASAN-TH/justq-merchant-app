import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetLocationPageRoutingModule } from './set-location-routing.module';

import { SetLocationPage } from './set-location.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetLocationPageRoutingModule
  ],
  declarations: [SetLocationPage],
  providers: [Geolocation, GoogleMaps]
})
export class SetLocationPageModule {}
