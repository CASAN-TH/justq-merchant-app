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
    path: 'shop-edit',
    loadChildren: () => import('./setting/shop-edit/shop-edit.module').then( m => m.ShopEditPageModule)
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
