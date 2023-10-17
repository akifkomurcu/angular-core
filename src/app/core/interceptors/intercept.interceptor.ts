import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  updatedRequest: any;
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.updatedRequest = req.clone({
      headers: req.headers
      .set('Authorization', `Bearer`)
      .set('research-center', 'sadasdasdasd')
    });

    console.log('intercept çalıştı', this.updatedRequest);
    return next.handle(this.updatedRequest)
  }
}
