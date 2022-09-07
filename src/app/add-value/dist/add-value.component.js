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
exports.AddValueComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var core_2 = require("@angular/core");
var AddValueComponent = /** @class */ (function () {
    function AddValueComponent(dialogRef, data, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.authService = authService;
        this.isInviteFailed = false;
        this.errorMessage = '';
        this.form = {
            value: null
        };
    }
    AddValueComponent.prototype.ngOnInit = function () {
        this.myTeamId = this.data.teamId;
    };
    AddValueComponent.prototype.onSubmit = function () {
        var _this = this;
        var value = this.form.value;
        this.authService.addValue(this.myTeamId, value).subscribe({
            next: function (data) {
                _this.isInviteFailed = false;
                window.location.reload();
            },
            error: function (err) {
                _this.errorMessage = err.error.message;
                _this.isInviteFailed = true;
            },
            complete: function () { }
        });
    };
    AddValueComponent.prototype.closeModal = function () {
        this.dialogRef.close();
    };
    AddValueComponent = __decorate([
        core_1.Component({
            selector: 'app-add-value',
            templateUrl: './add-value.component.html',
            styleUrls: ['./add-value.component.scss']
        }),
        __param(1, core_2.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddValueComponent);
    return AddValueComponent;
}());
exports.AddValueComponent = AddValueComponent;
