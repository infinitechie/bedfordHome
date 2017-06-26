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
var BookingTimesComponent = (function () {
    function BookingTimesComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.timesArray = [];
    }
    BookingTimesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this.timesArray = this._sharedService.timeArray;
        this._sharedService.dateSelectedMain.subscribe(function (message) { return _this.date = message; });
        console.log(this.timesArray);
    };
    BookingTimesComponent.prototype.passTimeData = function (booking) {
        this._sharedService.setTime(booking.time);
        this._sharedService.passData("confirm");
        this._sharedService.setTimeKey(booking.id);
    };
    BookingTimesComponent.prototype.backToDates = function () {
        this._sharedService.passData("date");
    };
    BookingTimesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingTimes',
            templateUrl: 'bookingTimes.component.html',
            styleUrls: ['bookingTimes.component.css'],
            animations: [
                core_1.trigger('signal', [
                    core_1.state('void', core_1.style({
                        'transform': 'translateX(+110%)'
                    })),
                    core_1.transition('* => *', core_1.animate('.8s'))
                ])]
        }), 
        __metadata('design:paramtypes', [sharedService_1.SharedService])
    ], BookingTimesComponent);
    return BookingTimesComponent;
}());
exports.BookingTimesComponent = BookingTimesComponent;
//# sourceMappingURL=bookingTimes.component.js.map