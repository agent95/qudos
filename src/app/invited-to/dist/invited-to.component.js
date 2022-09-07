"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InvitedToComponent = void 0;
var core_1 = require("@angular/core");
var InvitedToComponent = /** @class */ (function () {
    function InvitedToComponent(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.invitedTo = [];
    }
    InvitedToComponent.prototype.ngOnInit = function () {
    };
    InvitedToComponent = __decorate([
        core_1.Component({
            selector: 'app-invited-to',
            templateUrl: './invited-to.component.html',
            styleUrls: ['./invited-to.component.scss']
        })
    ], InvitedToComponent);
    return InvitedToComponent;
}());
exports.InvitedToComponent = InvitedToComponent;
