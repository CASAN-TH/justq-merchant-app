import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPageRoutingModule } from './review-routing.module';

import { ReviewPage } from './review.page';
// import { IonicRatingModule } from 'ionic4-rating';
import { StarRatingModule } from 'ionic4-star-rating';
import { MomentPipe } from '../pipe/moment.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPageRoutingModule,
    StarRatingModule
  ],
  declarations: [ReviewPage,MomentPipe]
})
export class ReviewPageModule {}
