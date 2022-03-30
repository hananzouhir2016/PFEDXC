import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  JwtServiceService } from '../auth/jwt-service.service';
@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService:  JwtServiceService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders({});
    const token = this.jwtService.getToken();
    if (token){
      httpHeaders = httpHeaders.set('Authorization', `Bearer ${token}`);
    }
    // Clone the request and set the new headers in one step.
    const authReq = req.clone({ headers: httpHeaders });
    // send cloned request with header to the next handler.
    console.log(req);
    return next.handle(authReq);
  }
}
