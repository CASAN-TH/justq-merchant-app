import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopServicetypePage } from './shop-servicetype.page';

const routes: Routes = [
  {
    path: '',
    component: ShopServicetypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopServicetypePageRoutingModule {}
