import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormModel, IValue } from '../interfaces/general.interface';
import { AuthService } from '../_service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertifyService } from '../_service/alertify.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: IFormModel = { username: '', password: '' };
    @Output() cancelRegister = new EventEmitter();

    constructor(private authService: AuthService,
                private alertify: AlertifyService) { }

    ngOnInit(): void {

    }

    register(): void {
        this.authService.register(this.model).subscribe(() => {
        this.alertify.sucess('Registration successful');
        }, (error: HttpErrorResponse) => this.alertify.error(error));
    }

    cancel(): void {
        this.cancelRegister.emit(false);
    }

}
