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
var booking_service_1 = require('../service/booking.service');
var sharedService_1 = require('../sharedService');
var BookingServicesComponent = (function () {
    function BookingServicesComponent(bookingService, _sharedService) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
        this.bookings = [];
        this.barbersArray = [];
        this.data = [];
    }
    BookingServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAddedBugs();
        this.data = this._sharedService.dataArray;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
    };
    BookingServicesComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bookingService.getAddedBugs()
            .subscribe(function (booking) {
            _this.bookings.push(booking);
            console.log(_this.bookings);
        }, function (err) {
            console.error("unable to add bug -", err);
        });
    };
    BookingServicesComponent.prototype.grabBarbersArray = function (booking) {
        var _this = this;
        this.bookingService.grabBarbersArray(booking)
            .subscribe(function (booking) {
            _this.barbersArray.push(booking);
            _this._sharedService.insertData(booking);
            booking = '';
        }, function (err) {
            console.error("unable to add bug -", err);
        });
        console.log(this.barbersArray);
        this._sharedService.passData("barber");
        this.passCutData(booking.name);
    };
    BookingServicesComponent.prototype.passCutData = function (cut) {
        this._sharedService.setCut(cut);
    };
    BookingServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingServices',
            templateUrl: 'bookingServices.component.html',
            styleUrls: ['bookingServices.component.css'],
            animations: [
                core_1.trigger('signal', [
                    core_1.state('void', core_1.style({
                        'transform': 'translateX(-100%)'
                    })),
                    core_1.transition('* => *', core_1.animate(800))
                ])]
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingServicesComponent);
    return BookingServicesComponent;
}());
exports.BookingServicesComponent = BookingServicesComponent;
//# sourceMappingURL=bookingServices.component.js.map