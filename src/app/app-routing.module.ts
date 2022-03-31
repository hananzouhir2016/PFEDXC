import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    redirectTo: 'main-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'leads-management',
    loadChildren: () => import('./leads-management/leads-management.module').then( m => m.LeadsManagementPageModule)
  },
  {
    path: 'main-dashboard',
    loadChildren: () => import('./main-dashboard/main-dashboard.module').then( m => m.MainDashboardPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
