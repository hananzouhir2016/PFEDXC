import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeadsManagementPageRoutingModule } from './leads-management-routing.module';
import { LeadsManagementPage } from './leads-management.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeadsManagementPageRoutingModule
  ],
  declarations: [LeadsManagementPage]
})
export class LeadsManagementPageModule {}
