"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var profile_component_1 = require("./profile/profile.component");
var slack_component_1 = require("./slack/slack.component");
var accept_invite_component_1 = require("./accept-invite/accept-invite.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var auth_guard_service_1 = require("./_services/auth-guard.service");
var routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'accept-invite/:token', component: accept_invite_component_1.AcceptInviteComponent },
    { path: 'signup', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'slack', component: slack_component_1.SlackComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_service_1.AuthGuardService] },
    // { path: 'user', component: BoardUserComponent },
    // { path: 'mod', component: BoardModeratorComponent },
    // { path: 'admin', component: BoardAdminComponent },
    // { path: 'invite', component: InviteComponent , canActivate: [AuthGuard] },
    // { path: 'reset-password/:email', component: ResetPasswordComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
