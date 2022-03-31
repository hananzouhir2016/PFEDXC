import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TenantService } from 'src/app/tenant/tenant.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  implements OnInit{
   tenant: string;
  public appPages = [
   { title: 'Accueil', url: '/main-dashboard', icon: 'home' },
    { title: 'Leads', url: '/leads-management', icon: 'low_priority' },
    { title: 'Deals', url: '/main-dashboard', icon: 'list' },
    { title: 'Projets', url: '/main-dashboard', icon: 'playlist_add_check' },
    { title: 'Rapport BI', url: '/main-dashboard', icon: 'pie_chart' },
    { title: 'Param�trage', url: '/main-dashboard', icon: 'settings' },
    { title: 'Administration', url: '/main-dashboard', icon: 'supervisor_account' },
    { title: 'Profil', url: '/main-dashboard', icon: 'person' },
    { title: 'Se deconnecter', url: '/main-dashboard', icon: 'exit_to_app' },
  ];
  constructor(private storage: Storage,private authService: AuthService,
    private tenantService: TenantService) {}
    async ngOnInit() {
      await this.storage.create();
      this.tenant = this.tenantService.getTenant();
    }
}
