import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { IFormModel} from '../interfaces/general.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model: IFormModel = { username: '', password: '' };

    constructor(private authService: AuthService,
                private alertify: AlertifyService,
                private router: Router) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.model).subscribe(
            () => {
                this.alertify.sucess('Logged in succesfully')
            },
            (error: HttpErrorResponse) => this.alertify.error(error),
            () => {
                this.router.navigate(['/members']);
            }
        )
    }

    loggedIn(): boolean {
        return this.authService.loggedIn();
    }

    logOut(): void {
        localStorage.removeItem('token');
        this.alertify.message("Logged out");
        this.router.navigate(['/home']);
    }

    
    public get getUserName() : string {
        return this.authService.decodeToken.unique_name
    }
    
}
