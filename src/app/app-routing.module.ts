import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  // },
  // {
  //   path: 'forgot',
  //   loadChildren: () => import('./auth/forgot/forgot.module').then( m => m.ForgotPageModule)
  // },
  // {
  //   path: 'policy',
  //   loadChildren: () => import('./auth/policy/policy.module').then( m => m.PolicyPageModule)
  // },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
