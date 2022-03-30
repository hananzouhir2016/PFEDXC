import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class TenantService {
  tenantValue: string;
  constructor(private storage: Storage) {
  }
  getTenant(): string {
    this.storage.get('tenant').then((val) => {
      this.tenantValue = val;
    });
    return this.tenantValue;
  }
  saveTenant(tenant: string) {
    this.storage.set('tenant', tenant);
    this.getTenant();
  }
  destroyTenant() {
    this.storage.remove('tenant');
  }
}

