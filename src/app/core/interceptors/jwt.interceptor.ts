import { JWT_NAME } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(JWT_NAME);

    // If a token exists, add it to the Authorization header
    if (token) {
      // Clone the request and add the Authorization header with the token
      const clonedReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });

      return next.handle(clonedReq);
    }

    return next.handle(request);
  }
}
