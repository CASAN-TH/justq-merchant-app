import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueuesPage } from './queues.page';

const routes: Routes = [
  {
    path: '',
    component: QueuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueuesPageRoutingModule {}
