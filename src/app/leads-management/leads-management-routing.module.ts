import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadsManagementPage } from './leads-management.page';
const routes: Routes = [
  {
    path: '',
    component: LeadsManagementPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadsManagementPageRoutingModule {}
