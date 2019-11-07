import { Component, OnInit } from '@angular/core';
import { IUser } from '../../_models/user.interface';
import { UserService } from '../../_service/user.service';
import { AlertifyService } from '../../_service/alertify.service';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

    users: IUser[] = [];

    constructor(
        private userService: UserService,
        private alertify: AlertifyService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe((data: Data): void => {
            this.users = data.users
        })

    }

}
