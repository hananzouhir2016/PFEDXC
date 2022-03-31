import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainDashboardPageRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardPage } from './main-dashboard.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainDashboardPageRoutingModule
  ],
  declarations: [MainDashboardPage]
})
export class MainDashboardPageModule {}
