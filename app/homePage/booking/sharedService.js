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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var SharedService = (function () {
    function SharedService() {
        this.selectedBookingSource = new BehaviorSubject_1.BehaviorSubject('services');
        this.currentMessage = this.selectedBookingSource.asObservable();
        this.BarberSelectedSource = new BehaviorSubject_1.BehaviorSubject('');
        this.currentMessage1 = this.BarberSelectedSource.asObservable();
        this.DateSelectedSourceMain = new BehaviorSubject_1.BehaviorSubject('');
        this.dateSelectedMain = this.DateSelectedSourceMain.asObservable();
        this.TimeSelectedSourceMain = new BehaviorSubject_1.BehaviorSubject('');
        this.timeSelectedMain = this.TimeSelectedSourceMain.asObservable();
        this.BarberSelectedSourceMain = new BehaviorSubject_1.BehaviorSubject('');
        this.barberSelectedMain = this.BarberSelectedSourceMain.asObservable();
        this.CutSelectedSourceMain = new BehaviorSubject_1.BehaviorSubject('');
        this.cutSelectedMain = this.CutSelectedSourceMain.asObservable();
        this.dataArray = [];
        this.dateArray = [];
        this.timeArray = [];
    }
    SharedService.prototype.insertData = function (data) {
        this.dataArray.unshift(data);
    };
    SharedService.prototype.insertDateData = function (data) {
        this.dateArray.unshift(data);
    };
    SharedService.prototype.insertTimeData = function (data) {
        this.timeArray.unshift(data);
    };
    // Setting Selected Information down to bottom cut off
    SharedService.prototype.setDate = function (date) {
        this.DateSelectedSourceMain.next(date);
    };
    SharedService.prototype.setTime = function (time) {
        this.TimeSelectedSourceMain.next(time);
    };
    SharedService.prototype.setBarber = function (barber) {
        this.BarberSelectedSourceMain.next(barber);
    };
    SharedService.prototype.setCut = function (cut) {
        this.CutSelectedSourceMain.next(cut);
    };
    // Here is bottom cut off
    SharedService.prototype.passData = function (message) {
        this.selectedBookingSource.next(message);
    };
    SharedService.prototype.passBarberSelectedData = function (barber) {
        this.BarberSelectedSource.next(barber);
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=sharedService.js.map