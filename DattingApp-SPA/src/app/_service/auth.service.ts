import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormModel, IDecodeToken } from '../interfaces/general.interface';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

interface IToken {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'http://localhost:5000/api/auth/login';
    private jwtHelper = new JwtHelperService();

    constructor(private http: HttpClient) { }

    login(model: IFormModel): Observable<void> {
        return this.http.post<IToken>(this.baseUrl, model)
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

    loggedIn(): boolean {
        const token = localStorage.getItem("token");
        return !this.jwtHelper.isTokenExpired(token);
    }

    
    public get decodeToken() : IDecodeToken {
        const token = localStorage.getItem('token');
        if (token) {
            return this.jwtHelper.decodeToken(token);
        }
    }
}
