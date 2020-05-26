import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./auth/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'set-location',
    loadChildren: () => import('./setting/set-location/set-location.module').then( m => m.SetLocationPageModule)
  },
  {
    path: 'shop-register',
    loadChildren: () => import('./setting/shop-register/shop-register.module').then( m => m.ShopRegisterPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./setting/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./boarding/boarding.module').then( m => m.BoardingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
