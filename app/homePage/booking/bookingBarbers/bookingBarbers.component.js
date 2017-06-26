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
        this.data = [null];
        this.dataUID = [null];
        this.dates = [];
    }
    BookingBarbersComponent.prototype.ngDoCheck = function () {
        if (this.pageIndex == "barbers") {
            this._sharedService.setIndex("pppp");
        }
        else {
        }
    };
    BookingBarbersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this._sharedService.barberIndexSelected.subscribe(function (message) { return _this.data = message; });
        this._sharedService.barberUIDSelected.subscribe(function (message) { return _this.dataUID = message; });
        this._sharedService.pageIndexSelected.subscribe(function (message) { return _this.pageIndex = message; });
        // this.data = this._sharedService.dataArray;
        this._sharedService.currentMessage1.subscribe(function (message) { return _this.barberSelectedToPass = message; });
    };
    BookingBarbersComponent.prototype.passBarberSelectedData = function (barberSelected) {
        var index = this.data.indexOf(barberSelected);
        console.log(index);
        console.log(this.dataUID[index]);
        this._sharedService.setIndividualUID(this.dataUID[index]);
        this._sharedService.passBarberSelectedData(this.dataUID[index]); //Unecessary duplicate but still being used
        this._sharedService.passData('date');
        this.grabDates(this.dataUID[index]);
        this._sharedService.setBarber(barberSelected);
    };
    BookingBarbersComponent.prototype.grabDates = function (barber) {
        var _this = this;
        this.bookingService.grabDatesArray(barber)
            .subscribe(function (booking) {
            _this.dates.push(booking);
            _this._sharedService.dateArray.push(booking);
            booking = '';
        }, function (err) {
            console.error("unable to add bug -", err);
        });
    };
    BookingBarbersComponent.prototype.backToServices = function () {
        this._sharedService.passData("services");
        this._sharedService.setIndex("services");
        //  this._sharedService.deleteBarberArray();
    };
    BookingBarbersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingBarbers',
            templateUrl: 'bookingBarbers.component.html',
            styleUrls: ['bookingBarbers.component.css']
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingBarbersComponent);
    return BookingBarbersComponent;
}());
exports.BookingBarbersComponent = BookingBarbersComponent;
//# sourceMappingURL=bookingBarbers.component.js.map