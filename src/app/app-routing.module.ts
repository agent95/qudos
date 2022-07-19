import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router'; 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { InviteComponent } from './invite/invite.component';
import { AcceptInviteComponent } from './accept-invite/accept-invite.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  AuthGuardService as AuthGuard } from './_services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'accept-invite/:token', component: AcceptInviteComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  // { path: 'user', component: BoardUserComponent },
  // { path: 'mod', component: BoardModeratorComponent },
  // { path: 'admin', component: BoardAdminComponent },
  // { path: 'invite', component: InviteComponent , canActivate: [AuthGuard] },
  // { path: 'reset-password/:email', component: ResetPasswordComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }