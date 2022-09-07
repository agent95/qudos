"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("src/environments/environment");
// const AUTH_API = 'http://localhost:3000/api/auth/';
// const AUTH_API = 'http://146.190.193.83:3000/api/auth/';
var AUTH_API = environment_1.environment.API_URL + '/api/auth/';
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper, tokenStorage) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.tokenStorage = tokenStorage;
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(AUTH_API + 'signin', {
            email: email,
            password: password
        }, httpOptions);
    };
    AuthService.prototype.logout = function () {
        this.tokenStorage.signOut();
    };
    AuthService.prototype.invite = function (email, teamId) {
        return this.http.post(AUTH_API + 'invite', {
            email: email,
            teamId: teamId
        }, httpOptions);
    };
    AuthService.prototype.validateInviteToken = function (token) {
        return this.http.post(AUTH_API + 'validateInviteToken', {
            token: token
        }, httpOptions);
    };
    AuthService.prototype.register = function (username, email, password) {
        return this.http.post(AUTH_API + 'signup', {
            username: username,
            email: email,
            password: password
        }, httpOptions);
    };
    AuthService.prototype.updateDetails = function (username, email, password) {
        return this.http.post(AUTH_API + 'update-password', {
            username: username,
            email: email,
            password: password
        }, httpOptions);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = sessionStorage.getItem('auth-token') || undefined;
        // Check whether the token is expired and return
        // true or false
        return !this.jwtHelper.isTokenExpired(token);
    };
    // create team
    AuthService.prototype.createTeam = function (teamName, userId) {
        return this.http.post(AUTH_API + 'createTeam', {
            teamName: teamName,
            userId: userId
        }, httpOptions);
    };
    AuthService.prototype.myTeams = function (userId) {
        return this.http.post(AUTH_API + 'myTeams', {
            userId: userId
        }, httpOptions);
    };
    AuthService.prototype.getTeamMembers = function (teamId) {
        return this.http.post(AUTH_API + 'getTeamMembers', {
            teamId: teamId
        }, httpOptions);
    };
    AuthService.prototype.addValue = function (teamId, value) {
        return this.http.post(AUTH_API + 'addValue', {
            teamId: teamId,
            value: value
        }, httpOptions);
    };
    AuthService.prototype.joinTeam = function (teamId, userId) {
        return this.http.post(AUTH_API + 'joinTeam', {
            teamId: teamId,
            userId: userId
        }, httpOptions);
    };
    AuthService.prototype.rejectInvite = function (teamId, userId) {
        return this.http.post(AUTH_API + 'rejectInvite', {
            teamId: teamId,
            userId: userId
        }, httpOptions);
    };
    AuthService.prototype.leaveTeam = function (teamId, userId) {
        return this.http.post(AUTH_API + 'leaveTeam', {
            teamId: teamId,
            userId: userId
        }, httpOptions);
    };
    AuthService.prototype.deleteValue = function (teamId, value) {
        return this.http.post(AUTH_API + 'deleteValue', {
            teamId: teamId,
            value: value
        }, httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
