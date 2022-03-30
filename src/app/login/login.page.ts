/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-ordering */
import {Component,OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth/auth.service';
import {TenantService} from '../tenant/tenant.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
showPassword = false;
 passwordToggleIcon = "assets/icon/eye-off-outline.svg";
  statusOperation: 'login' | 'forgotPassword' | 'resetPasswordRequestSuccess' | 'chooseMarket' | 'mfa' = 'login';
    loginForm = this.fb.group({
      username: ['', [Validators.required,  Validators.pattern('^[0-9]*$')]],
      password: ['',Validators.required]
    });
     resetPasswordRequestForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private tenantService: TenantService,
    public alertController: AlertController) {}
get isChooseMarket(): boolean {
      return this.statusOperation === 'chooseMarket';
    }
  get isLogin(): boolean {
      return this.statusOperation === 'login';
    }
  get isForgotPassword(): boolean {
    return this.statusOperation === 'forgotPassword';
  }
 setChooseMarket(): void {
      this.statusOperation = 'chooseMarket';
    }
  setLogin(): void {
      this.statusOperation = 'login';
    }
  setForgotPassword(): void {
    this.statusOperation = 'forgotPassword';
    }
  async ngOnInit() {
      this.statusOperation = 'chooseMarket';
    }
  public onCardClickLocal() {
    this.tenantService.saveTenant("local");
      this.statusOperation = 'login';
    }
    public onCardClickOffshore() {
      this.tenantService.saveTenant("offshore");
      this.statusOperation = 'login';
    }
 showAlert() {
    this.alertController.create({
      header: '',
      subHeader: 'Notification',
      message: 'Nom Utilisateur ou le mots de passe entré est incorrect.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }
  public submit(){
    {
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe({
          next: _ => {
            console.log('Successful login...');
            this.route.navigateByUrl("home",);
          },
          error: _ =>this.showAlert(),
        });
    }
  }
   togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.showPassword) {
      this.passwordToggleIcon = "assets/icon/eye-outline.svg";
    } else {
    this.passwordToggleIcon = "assets/icon/eye-off-outline.svg";
    }
  }
}
