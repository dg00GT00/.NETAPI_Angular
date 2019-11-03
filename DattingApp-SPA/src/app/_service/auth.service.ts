import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormModel } from '../interfaces/general.interface';
import { map } from "rxjs/operators";

interface IToken {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:5000/api/auth/'

    constructor(private http: HttpClient) { }

    login(model: IFormModel): Observable<void> {
        return this.http.post<IToken>(this.baseUrl + 'login', model)
            .pipe(
                map((response: IToken): void => {
                    if (response.token) {
                        localStorage.setItem('token', response.token)
                    }
                })
            )
    }

    register(model: IFormModel): Observable<IFormModel> {
        return this.http.post<IFormModel>(this.baseUrl + 'register', model);
    }
}
