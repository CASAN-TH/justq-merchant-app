import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./auth/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./setting/shop/shop.module').then( m => m.ShopPageModule)
  },
  {
    path: 'shoptype',
    loadChildren: () => import('./setting/shoptype/shoptype.module').then( m => m.ShoptypePageModule)
  },
  {
    path: 'shop-register',
    loadChildren: () => import('./setting/shop-register/shop-register.module').then( m => m.ShopRegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
