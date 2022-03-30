import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
const JWT_TOKEN_KEY = 'jwtToken';
@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {
  jwtValue: string;
  constructor(private storage: Storage) {}
  getToken(): string {
    this.storage.get(JWT_TOKEN_KEY).then((val) => {
      this.jwtValue = val;
    });
    return this.jwtValue;
  }
  saveToken(token: string) {
    this.storage.set(JWT_TOKEN_KEY, token);
  }
  destroyToken() {
    this.storage.remove(JWT_TOKEN_KEY);
  }
}
