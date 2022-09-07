"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateTeamComponent = void 0;
var core_1 = require("@angular/core");
var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(authService, tokenStorage, dialogRef) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.dialogRef = dialogRef;
        this.form = {
            name: null
        };
        this.isCreateFailed = false;
        this.errorMessage = '';
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.userId = this.tokenStorage.getUser().id;
        }
    };
    CreateTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        var teamName = this.form.teamName;
        this.authService.createTeam(teamName.split(' ').join('').toLowerCase(), this.userId).subscribe({
            next: function (data) {
                _this.isCreateFailed = false;
                // this.addToUser(data.team._id)
                window.location.reload();
                // console.log(data)
            },
            error: function (err) {
                _this.errorMessage = err.error.message;
                _this.isCreateFailed = true;
            },
            complete: function () { }
        });
    };
    CreateTeamComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    CreateTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-create-team',
            templateUrl: './create-team.component.html',
            styleUrls: ['./create-team.component.scss']
        })
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());
exports.CreateTeamComponent = CreateTeamComponent;
