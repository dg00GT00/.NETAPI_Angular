import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_service/auth.service';
import { IFormModel } from '../interfaces/general.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    model: IFormModel = { username: '', password: '' };

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    login(): void {
        this.authService.login(this.model).subscribe(
            () => console.log('Logged in successfuly'),
            (error: HttpErrorResponse) => console.log(error.message)
        )
    }

    loggedIn(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }

    logOut(): void {
        localStorage.removeItem('token');
        console.log('Logged out');
    }
}
