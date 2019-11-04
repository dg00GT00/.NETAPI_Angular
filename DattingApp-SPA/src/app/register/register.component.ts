import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFormModel, IValue } from '../interfaces/general.interface';
import { AuthService } from '../_service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: IFormModel = { username: '', password: '' };
    @Output() cancelRegister = new EventEmitter();

    constructor(private authService: AuthService) { }

    ngOnInit(): void {

    }

    register(): void {
        this.authService.register(this.model).subscribe(() => {
            console.log('Registration successful');
        }, (error: HttpErrorResponse) => console.log(error));
    }

    cancel(): void {
        this.cancelRegister.emit(false);
        console.log('Cancelled');
    }

}
