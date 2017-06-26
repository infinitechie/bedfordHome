"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import { BookingService } from '../service/booking.service';
var sharedService_1 = require('../sharedService');
var StripeBookingPage = (function () {
    function StripeBookingPage(/*private _zone: NgZone,*/ _sharedService, renderer) {
        this._sharedService = _sharedService;
        this.renderer = renderer;
    }
    StripeBookingPage.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        // this.amount= 55;
    };
    StripeBookingPage = __decorate([
        core_1.Component({
            selector: 'stripePage',
            moduleId: module.id,
            templateUrl: 'stripeBookingPage.component.html',
            styleUrls: ['stripeBookingPage.component.css']
        }), 
        __metadata('design:paramtypes', [sharedService_1.SharedService, core_1.Renderer])
    ], StripeBookingPage);
    return StripeBookingPage;
}());
exports.StripeBookingPage = StripeBookingPage;
//# sourceMappingURL=stripeBookingPage.component.js.map