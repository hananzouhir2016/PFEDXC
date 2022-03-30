import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantService } from './tenant.service';
import { JwtServiceService } from 'src/app/core/auth/jwt-service.service';
@Injectable({
    providedIn: 'root'
})
export class TenantInterceptor implements HttpInterceptor {
  constructor(private tenantService: TenantService,private jwtService: JwtServiceService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = this.jwtService.getToken();
      let httpHeaders = new HttpHeaders({
        });
        httpHeaders = request.headers.append('X-TenantID',this.tenantService.getTenant());
        if (token)
        {
      httpHeaders = request.headers.append('Authorization', `Bearer ${token}`);
        }
        request = request.clone({
            url: request.url,
            headers: httpHeaders,
            params: request.params,
        });
         console.log(request);
return next.handle(request);
}}
