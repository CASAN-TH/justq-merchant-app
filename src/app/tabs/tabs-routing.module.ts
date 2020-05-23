import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from '../auth/auth.guard';
import { HomeService } from '../home/home.service';
import { ShopGuard } from '../setting/shop.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'review',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../review/review.module').then(m => m.ReviewPageModule),
            // resolve: [HomeService],
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'queue',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../queue/queue.module').then(m => m.QueuePageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'setting',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../setting/shop/shop.module').then(m => m.ShopPageModule),
              canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/queue',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/queue',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
