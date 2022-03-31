import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TenantService } from './tenant.service';
@Injectable({
    providedIn: 'root'
})
export class TenantInterceptor implements HttpInterceptor {
  constructor(private tenantService: TenantService,) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let httpHeaders = new HttpHeaders({
        });
        httpHeaders = request.headers.append('X-TenantID',this.tenantService.getTenant());
        request = request.clone({
            url: request.url,
            headers: httpHeaders,
            params: request.params,
        });
return next.handle(request);
}}
