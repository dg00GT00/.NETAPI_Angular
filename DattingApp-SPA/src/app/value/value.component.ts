import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ITest{
    id: number,
    values: string
}

@Component({
    selector: 'app-value',
    templateUrl: './value.component.html',
    styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

    values: ITest;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getValues();
    }


    getValues(): void {
        this.http.get<ITest>('http://localhost:5000/api/values')
            .subscribe(response => {
                this.values = response
            }, error => { console.log(error); })
    }
}
