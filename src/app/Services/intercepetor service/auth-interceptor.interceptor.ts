import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../loginservice/login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginservice:LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      let authReq = request;
      let token = this.loginservice.setTokan()
      if(token!=null){
        authReq = authReq.clone({
          setHeaders:{Authorization:`Bearer ${token}`}
        })
      }





    return next.handle(authReq);


  }
}
