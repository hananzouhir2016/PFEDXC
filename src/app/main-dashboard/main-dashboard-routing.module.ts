import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardPage } from './main-dashboard.page';
const routes: Routes = [
  {
    path: '',
    component: MainDashboardPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainDashboardPageRoutingModule {}
