/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import {Injectable} from '@angular/core';
import {Observable,BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {JwtServiceService} from './jwt-service.service';
import {WrapperResponse} from '../model';
import {environment} from 'src/environments/environment';
import {tap} from 'rxjs/operators';
import { CurrentUser } from '../shared/models';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // store the URL so we can redirect after logging in
  private apiUrl = environment.serverHost;
  private WrapperResponseSubject = new BehaviorSubject<WrapperResponse>({} as WrapperResponse);
  public wrapperResponse$ = this.WrapperResponseSubject.asObservable();
  constructor(
    private http: HttpClient,
    private jwtService: JwtServiceService,
  ) {}
  login(username: string, password: string, code?: string): Observable<any> {
    return this.authenticateUser(username, password,code).pipe(
      tap(res => {
        // save Jwt new token bcz populate check if the token already exists.
        if(res){
          this.jwtService.saveToken(res.jToken.id_token);
          }
        }));
  }
  private authenticateUser(username: string, password: string, code?: string): Observable<WrapperResponse> {
    return this.http.post<WrapperResponse>(`${this.apiUrl}api/authenticate`, {username, password, code});
  }
   getCurrentUserInfo(): Observable<CurrentUser> {
    return this.http.get<CurrentUser>(`${this.apiUrl}api/account`);
  }
}
