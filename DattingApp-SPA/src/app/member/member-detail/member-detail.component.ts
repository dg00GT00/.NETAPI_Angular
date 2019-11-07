import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/_models/user.interface';
import { AlertifyService } from 'src/app/_service/alertify.service';
import { UserService } from 'src/app/_service/user.service';
import { ActivatedRoute, Data } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-member-detail',
    templateUrl: './member-detail.component.html',
    styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
    user: IUser;
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe((data: Data): void => {
            this.user = data.user
        });

        this.galleryOptions = [{
            width: '500px',
            height: '500px',
            imagePercent: 100,
            thumbnailsColumns: 4,
            imageAnimation: NgxGalleryAnimation.Slide,
            preview: false,
        }];
        this.galleryImages = this.getImages();
    }

    private getImages() {
        const imageUrls = [];
        for (const photo of this.user.photos) {
            imageUrls.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        }
        return imageUrls;
    }

}
