import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { IFormModel, IDecodeToken } from '../interfaces/general.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model: IFormModel = { username: '', password: '' };

    constructor(private authService: AuthService,
                private alertify: AlertifyService) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.model).subscribe(
            () => {
                this.alertify.sucess('Logged in succesfully')
            },
            (error: HttpErrorResponse) => this.alertify.error(error)
        )
    }

    loggedIn(): boolean {
        return this.authService.loggedIn();
    }

    logOut(): void {
        localStorage.removeItem('token');
        this.alertify.message("Logged out");
    }

    
    public get getUserName() : string {
        return this.authService.decodeToken.unique_name
    }
    
}
