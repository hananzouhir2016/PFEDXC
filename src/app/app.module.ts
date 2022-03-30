import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TenantModule } from './tenant/tenant.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers, Storage } from '@ionic/storage';
import {MaterialModule} from 'src/app/material.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorProviders } from 'src/app/core/interceptors/index';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    HttpClientModule,IonicModule.forRoot(),
    AppRoutingModule,
    TenantModule,
    MaterialModule,
    IonicStorageModule.forRoot({
           name: '__mydb',
driverOrder: [ Drivers.LocalStorage]

    }),


  ],
  providers: [
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
],
  bootstrap: [AppComponent],
})
export class AppModule { }
