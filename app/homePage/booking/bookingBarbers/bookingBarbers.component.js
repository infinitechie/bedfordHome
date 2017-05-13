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
var BookingBarbersComponent = (function () {
    function BookingBarbersComponent(bookingService, _sharedService) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
        this.data = [];
        this.dates = [];
    }
    BookingBarbersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this.data = this._sharedService.dataArray;
        this._sharedService.currentMessage1.subscribe(function (message) { return _this.barberSelectedToPass = message; });
    };
    BookingBarbersComponent.prototype.passBarberSelectedData = function (barberSelected) {
        this._sharedService.passBarberSelectedData(barberSelected); //Unecessary duplicate but still being used
        this._sharedService.passData('date');
        this.grabDates(barberSelected);
        this.passBarbersData(barberSelected);
    };
    BookingBarbersComponent.prototype.grabDates = function (barber) {
        var _this = this;
        this.bookingService.grabDatesArray(barber)
            .subscribe(function (booking) {
            _this.dates.push(booking);
            //  this.bookings.push(booking);
            // console.log(this.bookings);
            _this._sharedService.dateArray.push(booking);
            booking = '';
        }, function (err) {
            console.error("unable to add bug -", err);
        });
    };
    BookingBarbersComponent.prototype.passBarbersData = function (barber) {
        this._sharedService.setBarber(barber);
    };
    BookingBarbersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingBarbers',
            templateUrl: 'bookingBarbers.component.html',
            styleUrls: ['bookingBarbers.component.css'],
            animations: [
                core_1.trigger('signal', [
                    core_1.state('void', core_1.style({
                        'transform': 'translateX(+110%)'
                    })),
                    core_1.transition('* => *', core_1.animate('.8s 1s'))
                ])]
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingBarbersComponent);
    return BookingBarbersComponent;
}());
exports.BookingBarbersComponent = BookingBarbersComponent;
//# sourceMappingURL=bookingBarbers.component.js.map