import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IUser} from 'src/app/_models/user.interface';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MemberListResolver implements Resolve<IUser[]> {
    constructor(
        private userService: UserService,
        private router: Router,
        private alertify: AlertifyService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
        return this.userService.getUsers().pipe(
            catchError(()  => {
                this.alertify.error("Problem retrieving data");
                this.router.navigate(['/home']);
                return of(null);
            })
        )
    }
}

