import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IValue } from '../interfaces/general.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    registerMode = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    registerToggle(): void {
        this.registerMode = true;
    }


    cancelRegisterMode($event: boolean): void {
        this.registerMode = $event
    }

}
