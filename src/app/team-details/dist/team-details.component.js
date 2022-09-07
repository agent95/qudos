"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TeamDetailsComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var add_members_component_1 = require("../add-members/add-members.component");
var add_value_component_1 = require("../add-value/add-value.component");
var TeamDetailsComponent = /** @class */ (function () {
    function TeamDetailsComponent(authService, matDialog) {
        this.authService = authService;
        this.matDialog = matDialog;
        this.isInvited = false;
        this.userId = '';
        this.myTeamId = '';
        this.newValue = '';
        this.members = [];
    }
    TeamDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getTeamMembers(this.team._id).subscribe({
            next: function (data) {
                _this.myTeamId = data.teamId;
                _this.members = data.members;
            },
            error: function (err) {
                console.log(err.error.message);
            },
            complete: function () { }
        });
    };
    TeamDetailsComponent.prototype.openAddMember = function () {
        var dialogConfig = new dialog_1.MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        // dialogConfig.height = "300px";
        dialogConfig.width = "600px";
        dialogConfig.data = { teamId: this.myTeamId };
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(add_members_component_1.AddMembersComponent, dialogConfig);
    };
    TeamDetailsComponent.prototype.openAddValue = function () {
        var dialogConfig = new dialog_1.MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        dialogConfig.disableClose = true;
        dialogConfig.id = "add-value-component";
        // dialogConfig.height = "300px";
        dialogConfig.width = "600px";
        dialogConfig.data = { teamId: this.myTeamId };
        // https://material.angular.io/components/dialog/overview
        var modalDialog = this.matDialog.open(add_value_component_1.AddValueComponent, dialogConfig);
    };
    TeamDetailsComponent.prototype.deleteValue = function (index) {
        this.authService.deleteValue(this.team._id, index).subscribe({
            next: function (data) { console.log(data); },
            error: function (err) { console.log(err); },
            complete: function () { }
        });
    };
    TeamDetailsComponent.prototype.joinTeam = function () {
        this.authService.joinTeam(this.team._id, this.userId).subscribe({
            next: function (data) {
                console.log('data', data);
                window.location.reload();
            },
            error: function (err) { console.log(err.message); },
            complete: function () { }
        });
    };
    TeamDetailsComponent.prototype.rejectInvite = function () {
        this.authService.rejectInvite(this.team._id, this.userId).subscribe({
            next: function (data) {
                console.log('data', data);
                window.location.reload();
            },
            error: function (err) { console.log(err.message); },
            complete: function () { }
        });
    };
    __decorate([
        core_1.Input()
    ], TeamDetailsComponent.prototype, "team");
    __decorate([
        core_1.Input()
    ], TeamDetailsComponent.prototype, "isInvited");
    __decorate([
        core_1.Input()
    ], TeamDetailsComponent.prototype, "userId");
    TeamDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-team-details',
            templateUrl: './team-details.component.html',
            styleUrls: ['./team-details.component.scss']
        })
    ], TeamDetailsComponent);
    return TeamDetailsComponent;
}());
exports.TeamDetailsComponent = TeamDetailsComponent;
