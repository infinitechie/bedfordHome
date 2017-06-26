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
        this.barberUIDS = [];
        this.barbersArray = [];
        this.data = [];
    }
    BookingServicesComponent.prototype.ngDoCheck = function () {
        if (this.pageIndex == "services") {
            this._sharedService.setIndex("u22");
            this.getAddedBugs();
        }
        else {
        }
    };
    BookingServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAddedBugs();
        // this._sharedService.barberArray.subscribe(message => this.barbersArray = message);
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this._sharedService.pageIndexSelected.subscribe(function (message) { return _this.pageIndex = message; });
    };
    BookingServicesComponent.prototype.getAddedBugs = function () {
        var _this = this;
        this.bookings = [];
        this.bookingService.getAddedBugs()
            .subscribe(function (booking) {
            _this.bookings.push(booking);
        }, function (err) {
            console.error("unable to add bug -", err);
        });
    };
    BookingServicesComponent.prototype.grabBarbersNames = function (staff) {
        var self = this;
        this.bookingService.barbersDBRef.child(staff).once('value').then(function (snapshot) {
            var num = snapshot.val().name;
            self.barbersArray.push(num);
            self._sharedService.insertData(num);
            console.log(num);
        });
        // console.log(staff)
        // this.bookingService.getBarbersNames(staff)
        //   .subscribe(booking => {
        //         // this.barbersArray.push(booking.name);
        //         // console.log(booking.name);
        //         // this._sharedService.insertData(booking.name);
        //     },
        // err => {
        //     console.error("unable to add bug -", err);
        // });
        // this._sharedService.addToArray(this.barbersArray);
    };
    BookingServicesComponent.prototype.grabBarbersArray = function (booking) {
        var _this = this;
        this.barbersArray = [];
        this.barberUIDS = [];
        this.bookingService.grabBarbersArray(booking)
            .subscribe(function (booking) {
            console.log(booking);
            _this.barberUIDS.push(booking);
            console.log(_this.barberUIDS);
            // this.bookingService.getBarbersNames
            _this.grabBarbersNames(booking);
            // this.barbersArray.push(booking);
            // this._sharedService.insertData(booking);
            booking = '';
        }, function (err) {
            console.error("unable to add bug -", err);
        });
        // this._sharedService.deleteArray();
        this._sharedService.passData("barber");
        this.passCutData(booking.name, booking);
        console.log(this.barbersArray);
        this._sharedService.addToArray(this.barbersArray);
        this._sharedService.setBarberUIDS(this.barberUIDS);
    };
    BookingServicesComponent.prototype.passCutData = function (cut, booking) {
        this._sharedService.setCut(cut);
        this._sharedService.setCost(booking.cost);
        if (this.pageIndex == "services") {
            this._sharedService.setIndex("barbers");
        }
        else {
            console.log("first time on barber page");
        }
    };
    BookingServicesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingServices',
            templateUrl: 'bookingServices.component.html',
            styleUrls: ['bookingServices.component.css']
        }), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService])
    ], BookingServicesComponent);
    return BookingServicesComponent;
}());
exports.BookingServicesComponent = BookingServicesComponent;
//# sourceMappingURL=bookingServices.component.js.map