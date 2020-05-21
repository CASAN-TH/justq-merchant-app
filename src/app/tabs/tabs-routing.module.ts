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
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule),
            // resolve: [HomeService],
            canActivate: [AuthGuard, ShopGuard]
          }
        ]
      },
      {
        path: 'notify',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notify/notify.module').then(m => m.NotifyPageModule),
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
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
