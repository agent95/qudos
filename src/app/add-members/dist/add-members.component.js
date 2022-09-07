"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AddMembersComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var dialog_1 = require("@angular/material/dialog");
var core_2 = require("@angular/core");
var AddMembersComponent = /** @class */ (function () {
    function AddMembersComponent(authService, clipboard, dialogRef, data) {
        this.authService = authService;
        this.clipboard = clipboard;
        this.dialogRef = dialogRef;
        this.data = data;
        this.form = {
            email: null
        };
        this.isInviteFailed = false;
        this.errorMessage = '';
        this.inviteToken = '';
        this.inviteUrl = '';
        this.successMessage = false;
    }
    AddMembersComponent.prototype.ngOnInit = function () {
        this.myTeamId = this.data.teamId;
    };
    AddMembersComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.form, email = _a.email, password = _a.password;
        this.authService.invite(email, this.myTeamId).subscribe({
            next: function (data) {
                _this.isInviteFailed = false;
                _this.inviteToken = data.token;
                _this.inviteUrl = environment_1.environment.INVITE_URL + "/accept-invite/" + _this.inviteToken;
                if (!data.token) {
                    //   this.dialogRef.close();
                    _this.successMessage = true;
                }
            },
            error: function (err) {
                _this.errorMessage = err.error.message;
                _this.isInviteFailed = true;
            },
            complete: function () { }
        });
    };
    AddMembersComponent.prototype.copyText = function (textToCopy) {
        this.clipboard.copy(textToCopy);
    };
    AddMembersComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    AddMembersComponent = __decorate([
        core_1.Component({
            selector: 'app-add-members',
            templateUrl: './add-members.component.html',
            styleUrls: ['./add-members.component.scss']
        }),
        __param(3, core_2.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddMembersComponent);
    return AddMembersComponent;
}());
exports.AddMembersComponent = AddMembersComponent;
