import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberDetailResolver } from 'src/_resolvers/member-detail-resolver';
import { MemberListResolver } from 'src/_resolvers/member-list-resolver';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '', runGuardsAndResolvers: 'always', canActivate: [AuthGuard], children: [
            {
                path: 'members', component: MemberListComponent,
                resolve: { users: MemberListResolver }
            },
            {
                path: 'members/:id', component: MemberDetailComponent,
                resolve: { user: MemberDetailResolver }
            },
            { path: 'messages', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
