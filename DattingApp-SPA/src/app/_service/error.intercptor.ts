import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IFormModel } from '../interfaces/general.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<IFormModel>, next: HttpHandler): Observable<HttpEvent<IFormModel>> {
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    return throwError(error.statusText);
                }
                const applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return throwError(applicationError);
                }
                const serverError = error.error;
                let modalStateErrors = '';
                if (serverError.errors && typeof serverError.errors === 'object') {
                    for (const key in serverError.errors) {
                        if (serverError.errors[key]) {
                            modalStateErrors += serverError.errors[key] + '\n';
                        }
                    }
                }
                return throwError(modalStateErrors || serverError || 'Server Error');
            })
        );
    }
}