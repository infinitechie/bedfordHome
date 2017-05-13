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
var booking_service_1 = require('../service/booking.service');
var BookingDatesComponent = (function () {
    function BookingDatesComponent(bookingService, _sharedService) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
        this.barberSelectedToPass = "j";
        this.bookings = [];
        this.dates = [];
        this.timesArray = [];
    }
    BookingDatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dates = this._sharedService.dateArray;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this._sharedService.currentMessage1.subscribe(function (message) { return _this.barberSelectedToPass = message; });
        // console.log(this.barberSelectedToPass);
    };
    BookingDatesComponent.prototype.passBarberSelectedData = function (dateSelected) {
        this.grabTimes(this.barberSelectedToPass, dateSelected);
        this.passDateData(dateSelected);
        this._sharedService.passData("time");
    };
    BookingDatesComponent.prototype.grabTimes = function (barberSelected, dateSelected) {
        var _this = this;
        this.bookingService.grabTimesArray(barberSelected, dateSelected)
            .subscribe(function (booking) {
            _this.timesArray.push(booking);
            _this._sharedService.timeArray.push(booking);
            booking = '';
        }, function (err) {
            console.error("unable to add bug -", err);
        });
        this._sharedService.passData("time");
    };
    BookingDatesComponent.prototype.passDateData = function (date) {
        this._sharedService.setDate(date);
    };
    BookingDatesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingDates',
            templateUrl: 'bookingDates.component.html',
            styleUrls: ['bookingDates.component.css'],
            animations: [
                core_1.trigger('signal', [
                    core_1.state('void', core_1.style({
                        'transform': 'translateX(+110%)'
                    })),
                    core_1.transition('* => *', core_1.animate('.8s'))
                ])]
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingDatesComponent);
    return BookingDatesComponent;
}());
exports.BookingDatesComponent = BookingDatesComponent;
//# sourceMappingURL=bookingDates.component.js.map