import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopRegisterPage } from './shop-register.page';

const routes: Routes = [
  {
    path: '',
    component: ShopRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRegisterPageRoutingModule {}
