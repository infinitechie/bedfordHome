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
    function BookingService(fire /*, public afAuth: AngularFireAuth*/) {
        // this.user = afAuth.authState;
        this.fire = fire;
        this.bookingsDbRef = this.fire.database.ref().child('/services');
        this.barbersDBRef = this.fire.database.ref().child('/staff');
        this.customersRef = this.fire.database.ref().child('/users');
        this.auth = this.fire._firebaseAuthRef;
    }
    BookingService.prototype.makeBooking = function (barber, date, time /*, bookedBy: string*/) {
        // this.customersRef.child(bookedBy)
        // NEED TO USE ABOVE REF TO GRAB USERS NAME TO PASS IT INTO BOOKEDBY KEY IN DATABASE
        var timeNodeData = {
            booked: "booked",
            bookedBy: "User"
        };
        this.barbersDBRef.child(barber).child("dates").child(date).child("times").child(String(time)).update(timeNodeData);
    };
    //     getSignUpDetails(email: string, password: string){
    //            this.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //             var errorCode = error;
    //             var errorMessage1 = error.message;
    //              console.log(errorMessage1);
    //   // ...
    //             });
    //     }
    //     getLoginDetails(email: string, password: string){
    //         this.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //         var errorCode = error;
    //           var errorMessage1 = error.message;
    //          console.log(errorMessage1);
    //         //  this.errorMessage = errorMessage1;
    //   // ...
    // });
    //     }
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
    BookingService.prototype.getBarbersNames = function (staff) {
        var _this = this;
        return Observable_1.Observable.create(function (obs) {
            _this.barbersDBRef.on('child_added', function (booking) {
                var newBooking = booking.val();
                console.log(newBooking);
                // newBooking.id = booking.key;
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
                var currentEpochDate = (new Date).getTime();
                if (newBooking.date > currentEpochDate && newBooking.booked == "notBooked") {
                    obs.next(newBooking);
                    console.log(newBooking);
                }
                else {
                    console.log("date gone");
                }
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
                newBooking.id = Number(booking.key);
                if (newBooking.booked == "notBooked") {
                    obs.next(newBooking);
                    console.log(newBooking);
                }
                else {
                }
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