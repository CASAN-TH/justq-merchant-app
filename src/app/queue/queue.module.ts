import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueuePageRoutingModule } from './queue-routing.module';

import { QueuePage } from './queue.page';
import { MomentPipe } from '../pipe/moment.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueuePageRoutingModule
  ],
  declarations: [QueuePage, MomentPipe]
})
export class QueuePageModule {}
