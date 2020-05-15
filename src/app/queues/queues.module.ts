import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueuesPageRoutingModule } from './queues-routing.module';

import { QueuesPage } from './queues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueuesPageRoutingModule
  ],
  declarations: [QueuesPage]
})
export class QueuesPageModule {}
