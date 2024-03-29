import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import {MaterialQudosModules} from '../material.modules';
import { LogOutBtnComponent } from './log-out-btn/log-out-btn.component';
import { InviteComponent } from './invite/invite.component';
import { AcceptInviteComponent } from './accept-invite/accept-invite.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginBtnComponent } from './login-btn/login-btn.component';

import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { CreateTeamComponent } from './create-team/create-team.component';
import { MyTeamsComponent } from './my-teams/my-teams.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { InvitedToComponent } from './invited-to/invited-to.component';
import { ModalComponent } from './modal/modal.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddMembersComponent } from './add-members/add-members.component';
import { AddValueComponent } from './add-value/add-value.component';
import { SignUpBtnComponent } from './sign-up-btn/sign-up-btn.component';
import { SlackComponent } from './slack/slack.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LogOutBtnComponent,
    InviteComponent,
    AcceptInviteComponent,
    ResetPasswordComponent,
    DashboardComponent,
    LoginBtnComponent,
    CreateTeamComponent,
    MyTeamsComponent,
    InvitationsComponent,
    InvitedToComponent,
    ModalComponent,
    TeamDetailsComponent,
    AddMembersComponent,
    AddValueComponent,
    SignUpBtnComponent,
    SlackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    JwtModule.forRoot({ // for JwtHelperService
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    }),
    BrowserAnimationsModule,
    MaterialQudosModules
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
