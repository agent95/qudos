"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InviteComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var InviteComponent = /** @class */ (function () {
    function InviteComponent(authService, clipboard) {
        this.authService = authService;
        this.clipboard = clipboard;
        this.form = {
            email: null
        };
        this.isInviteFailed = false;
        this.errorMessage = '';
        this.inviteToken = '';
        this.inviteUrl = '';
    }
    InviteComponent.prototype.ngOnInit = function () {
    };
    InviteComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form, email = _a.email, password = _a.password;
        this.authService.invite(email, this.teamId).subscribe({
            next: function (data) {
                _this.isInviteFailed = false;
                _this.inviteToken = data.token;
                _this.inviteUrl = environment_1.environment.INVITE_URL + "/accept-invite/" + _this.inviteToken;
            },
            error: function (err) {
                _this.errorMessage = err.error.message;
                _this.isInviteFailed = true;
            },
            complete: function () { }
        });
    };
    InviteComponent.prototype.copyText = function (textToCopy) {
        this.clipboard.copy(textToCopy);
    };
    InviteComponent = __decorate([
        core_1.Component({
            selector: 'app-invite',
            templateUrl: './invite.component.html',
            styleUrls: ['./invite.component.scss']
        })
    ], InviteComponent);
    return InviteComponent;
}());
exports.InviteComponent = InviteComponent;
