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
var sharedService_1 = require('../sharedService');
var booking_service_1 = require('../../booking/service/booking.service');
var BookingConfirmComponent = (function () {
    function BookingConfirmComponent(bookingService, _sharedService) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
    }
    BookingConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this._sharedService.dateSelectedMain.subscribe(function (message) { return _this.dateSelected = message; });
        this._sharedService.timeSelectedMain.subscribe(function (message) { return _this.timeSelected = message; });
        this._sharedService.barberSelectedMain.subscribe(function (message) { return _this.barberSelected = message; });
        this._sharedService.cutSelectedMain.subscribe(function (message) { return _this.cutSelected = message; });
    };
    BookingConfirmComponent.prototype.sendDataToFirebase = function () {
        this._sharedService.passData('signUp');
    };
    BookingConfirmComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingConfirm',
            templateUrl: 'bookingConfirm.component.html',
            styleUrls: ['bookingConfirm.component.css']
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingConfirmComponent);
    return BookingConfirmComponent;
}());
exports.BookingConfirmComponent = BookingConfirmComponent;
//# sourceMappingURL=bookingConfirm.component.js.map