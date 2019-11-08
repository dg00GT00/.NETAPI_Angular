import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IUser } from 'src/app/_models/user.interface';
import { ActivatedRoute, Data } from '@angular/router';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
    selector: 'app-member-edit',
    templateUrl: './member-edit.component.html',
    styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
    user: IUser;
    @ViewChild('editForm', { static: false }) editForm: NgForm;

    constructor(
        private route: ActivatedRoute,
        private alertify: AlertifyService,
        private userService: UserService,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.route.data.subscribe((data: Data): void => {
            this.user = data.user
            console.log(this.user.knowAs);
        })
    }

    updateUser(): void {
        this.userService.updateUser(+this.authService.decodeToken.nameid, this.user)
            .subscribe(() => {
                this.alertify.success("Profile updated successfully");
                this.editForm.reset(this.editForm.value);
            }, (error: string) => this.alertify.error(error));
    }

    @HostListener('window:beforeunload', ['$event'])
    unloadNotification($event: Event): void {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
}
