import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AlertifyService {

    constructor() { }

    confirm(message: string, okCallBack: () => any): void {
        alertify.confirm(message, (event: any) => {
            if (event) {
                okCallBack();
            }
        })
    }

    sucess(message: string): void {
        alertify.success(message);
    }

    error(message: string): void;
    error(message: HttpErrorResponse): void;
    error(message): any {
        alertify.error(message);
    }
    warning(message: string): void {
        alertify.warning(message);
    }
    message(message: string): void {
        alertify.message(message);
    }
}
