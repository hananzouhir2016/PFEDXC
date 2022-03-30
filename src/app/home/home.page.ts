import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TenantService } from 'src/app/tenant/tenant.service';
import { CurrentUser } from 'src/app/core/shared/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tenant: string;
  currentUser: CurrentUser;
	public appPages = [
    { title: 'Accueil', url: '/folder/Inbox', icon: 'home' },
    { title: 'Leads', url: '/folder/Outbox', icon: 'low_priority' },
    { title: 'Deals', url: '/folder/Outbox', icon: 'list' },
    { title: 'Projets', url: '/folder/Outbox', icon: 'playlist_add_check' },
    { title: 'Rapport BI', url: '/folder/Outbox', icon: 'pie_chart' },
    { title: 'Param�trage', url: '/folder/Outbox', icon: 'settings' },
    { title: 'Administration', url: '/folder/Outbox', icon: 'supervisor_account' },
    { title: 'Profil', url: '/folder/Outbox', icon: 'person' },
    { title: 'Se deconnecter', url: '/folder/Outbox', icon: 'exit_to_app' },

  ];
  constructor(private authService: AuthService,
    private tenantService: TenantService) { }
  ngOnInit() {
    this.tenant = this.tenantService.getTenant();
  this.getCurrentUser();
  };

  getCurrentUser() {
    this.authService.getCurrentUserInfo().subscribe({
      next: (currentUser: CurrentUser) => {
        this.currentUser = currentUser;
        console.log(this.currentUser);
      }
    });
  }
}
