import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${window.location.origin}/api${request.url}`;

    request = request.clone({
      url,
      setHeaders: {
        Accept: 'application/json'
      }
    });

    return next.handle(request).pipe(
      filter((response: HttpEvent<any>) => response instanceof HttpResponse),
      map((response: any) => {
        response.body = response.body.data;
        return response;
      }),
      catchError(error => throwError(error))
    );
  }
}
