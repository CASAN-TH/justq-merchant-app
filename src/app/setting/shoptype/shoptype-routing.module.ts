import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoptypePage } from './shoptype.page';

const routes: Routes = [
  {
    path: '',
    component: ShoptypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoptypePageRoutingModule {}
