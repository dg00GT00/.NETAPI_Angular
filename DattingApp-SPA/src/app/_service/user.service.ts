import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../_models/user.interface';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(this.baseUrl + 'users/');
    }

    getUser(id: number): Observable<IUser> {
        return this.http.get<IUser>(this.baseUrl + 'users/' + +id);
    }

    updateUser(id: number, user: IUser): Observable<IUser> {
        return this.http.put<IUser>(this.baseUrl + 'users/' + id, user);
    }
}
