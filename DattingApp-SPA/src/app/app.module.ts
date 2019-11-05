import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NavComponent } from './nav/nav.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './_service/error.intercptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MemberListComponent } from './member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { RoutingModule } from "./routes.module";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        RegisterComponent,
        MemberListComponent,
        ListsComponent,
        MessagesComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        RoutingModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule { }
