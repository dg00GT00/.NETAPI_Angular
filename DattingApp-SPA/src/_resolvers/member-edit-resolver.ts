import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/_models/user.interface';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/_service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class MemberEditResolver implements Resolve<IUser> {
    constructor(
        private userService: UserService,
        private router: Router,
        private alertify: AlertifyService,
        private authService: AuthService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IUser> | Promise<IUser> | IUser {
        return this.userService.getUser(+this.authService.decodeToken.nameid).pipe(
        catchError(()  => {
                this.alertify.error("Problem retrieving data");
                this.router.navigate(['/members']);
                return of(null);
            })
        )
    }
}

