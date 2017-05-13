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
var Observable_1 = require('rxjs/Observable');
// import { AngularFireAuth } from 'angularfire2/auth';
var firebase_config_service_1 = require('../../../core/service/firebase-config.service');
var BookingService = (function () {
    // user: Observable<firebase.User>;
    function BookingService(fire /*, public afAuth: AngularFireAuth*/) {
        this.fire = fire;
        this.bookingsDbRef = this.fire.database.ref().child('/services');
        this.barbersDBRef = this.fire.database.ref().child('/barbers').child('/barbers');
        // this.user = afAuth.authState;
    }
    //   login() {
    //     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //   }
    //   logout() {
    //     this.afAuth.auth.signOut();
    //   }
    BookingService.prototype.getAddedBugs = function () {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.bookingsDbRef.on('child_added', function (booking) {
                var newBooking = booking.val();
                newBooking.id = booking.key;
                obs.next(newBooking);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    BookingService.prototype.grabBarbersArray = function (bookingSelected) {
        var currentBookingRef = this.bookingsDbRef.child(bookingSelected.id).child('barbers');
        return Observable_1.Observable.create(function (obs) {
            currentBookingRef.on('child_added', function (booking) {
                obs.next(booking.val());
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    BookingService.prototype.grabDatesArray = function (barberSelected) {
        var currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates');
        return Observable_1.Observable.create(function (obs) {
            currentBookingRef.on('child_added', function (booking) {
                var newBooking = booking.val();
                newBooking.id = booking.key;
                obs.next(newBooking);
                console.log(newBooking);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    BookingService.prototype.grabTimesArray = function (barberSelected, dateSelected) {
        var currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates').child(dateSelected).child('times');
        return Observable_1.Observable.create(function (obs) {
            currentBookingRef.on('child_added', function (booking) {
                var newBooking = booking.val();
                newBooking.id = booking.key;
                obs.next(newBooking);
                console.log(newBooking);
            }, function (err) {
                obs.throw(err);
            });
        });
    };
    BookingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
    ], BookingService);
    return BookingService;
}());
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map