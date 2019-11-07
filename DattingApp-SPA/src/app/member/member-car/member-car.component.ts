import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/_models/user.interface';

@Component({
    selector: 'app-member-car',
    templateUrl: './member-car.component.html',
    styleUrls: ['./member-car.component.css']
})
export class MemberCarComponent implements OnInit {
    @Input() user: IUser;
    
    constructor() { }

    ngOnInit() {
    }

}
