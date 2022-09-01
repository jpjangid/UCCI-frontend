import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiService } from '../services/api.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private apiservice: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        //cal/ refresh token api
        //check respose = If response = 401
        // auto logout if 401 response returned from api
        this.apiservice.logoutUser();
        // window.location.reload();
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
