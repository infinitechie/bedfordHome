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
var bookingSignUpModel_1 = require('./model/bookingSignUpModel');
var http_1 = require('@angular/http');
var BookingSignUpComponent = (function () {
    function BookingSignUpComponent(bookingService, _sharedService, ref, renderer, http) {
        this.bookingService = bookingService;
        this._sharedService = _sharedService;
        this.ref = ref;
        this.renderer = renderer;
        this.http = http;
        this.success = false;
        this.token_triggered = false;
        this.details = new bookingSignUpModel_1.BookingSignUpModel(null, null);
    }
    BookingSignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._sharedService.currentMessage.subscribe(function (message) { return _this.serviceSelected = message; });
        this.success = false;
        this._sharedService.emailSelected.subscribe(function (message) { return _this.emailSlected = message; });
        this._sharedService.cutCostSelected.subscribe(function (message) { return _this.costSelected = message; });
        this._sharedService.dateSelectedMain.subscribe(function (message) { return _this.dateSelected = message; });
        this._sharedService.timeSelectedMain.subscribe(function (message) { return _this.timeSelected = message; });
        this._sharedService.barberSelectedMain.subscribe(function (message) { return _this.barberSelected = message; });
        this._sharedService.cutSelectedMain.subscribe(function (message) { return _this.cutSelected = message; });
        this._sharedService.timeKeySelected.subscribe(function (message) { return _this.timeKeySelected = message; });
    };
    BookingSignUpComponent.prototype.openCheckout = function () {
        var self = this;
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_2sCFrtL7aruzl68erwU0r9E8',
            locale: 'auto',
            token: function (token) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use
                var data = 'stripetoken=' + token.id + '&amount=' + String(self.costSelected * 100);
                var headers = new http_1.Headers();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                self.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe(function (res) {
                    console.log("jnnjnjnj");
                    if (res.json().success) {
                        console.log('transaction Successfull!!');
                        self._sharedService.passData("stripe");
                    }
                    else {
                        console.log('ohohohohoh');
                    }
                });
                self.token_triggered = true;
                // self._sharedService.passData("stripe");
                var numConverted = self.timeKeySelected.toLocaleString();
                var numUsed = '' + self.timeKeySelected;
                self.bookingService.makeBooking(self.barberSelected, self.dateSelected, numUsed);
                // alert(token.id);
                //     this._httpService.enrollCourse(data)
                //     .subscribe(
                //         data => this.handleSuccess(data, this.form),
                //         error => this.handleError(error)
                // )
            },
            closed: function () {
                if (!self.token_triggered) {
                    alert("Order Cancelled");
                }
                else {
                }
            }
        });
        // var self = this;
        handler.open({
            name: 'Bedford Stuy',
            description: 'Temple Bar',
            amount: this.costSelected * 100,
            email: this.emailSlected,
            currency: 'eur'
        });
        this.globalListener = this.renderer.listenGlobal('window', 'popstate', function () {
            handler.close();
        });
    };
    // pay() {
    //   this.stripe.setPublishableKey('pk_test');
    //   this.stripe.createCardToken(this.cardinfo).then((token) => {
    //     var data = 'stripetoken=' + token + '&amount=50';
    //     var headers = new Headers();
    //     headers.append('Conent-Type', 'application/x-www-form-urlencoded');
    //     this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
    //       if (res.json().success)
    //       alert('transaction Successfull!!')  
    //     })
    //   })
    // }
    BookingSignUpComponent.prototype.signUpButton = function (email, password) {
        var self = this;
        this.bookingService.auth.createUserWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
            // Success 
            self._sharedService.setEmail(email);
            alert("successfully signed up ");
            self._sharedService.passData("stripe");
            self.bookingService.auth.signInWithEmailAndPassword(email, password);
            self.writeUserData(Math.random().toString(36).slice(2), email);
            self.openCheckout();
        })
            .catch(function (error) {
            // Error Handling
            var errorMessage1 = error.message;
            alert(errorMessage1);
        });
    };
    BookingSignUpComponent.prototype.writeUserData = function (userID, email) {
        this.bookingService.customersRef.child(userID).set({
            email: email
        });
    };
    BookingSignUpComponent.prototype.onSubmit = function (formData) {
        console.log(formData.value.email);
    };
    BookingSignUpComponent.prototype.loginButton = function (email, password) {
        var self = this;
        this.bookingService.auth.signInWithEmailAndPassword(email, password)
            .then(function (firebaseUser) {
            // Success 
            self._sharedService.setEmail(email);
            alert("successfully signed in");
            self.openCheckout();
        })
            .catch(function (error) {
            // Error Handling
            var errorMessage1 = error.message;
            alert(errorMessage1);
        });
        //         .catch(function(error) {
        //   // Handle Errors here.
        //    if (!error){
        //            this.sharedService.passData("hhhh");
        //         } else {
        //             var errorMessage1 = error.message;
        //             alert(errorMessage1);
        //         }
        //         return;
        // });
    };
    BookingSignUpComponent.prototype.ngOnDestroy = function () {
        this.globalListener();
    };
    BookingSignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bookingSignUp',
            templateUrl: 'bookingSignUp.component.html',
            styleUrls: ['bookingSignUp.component.css']
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [booking_service_1.BookingService, sharedService_1.SharedService, core_1.ChangeDetectorRef, core_1.Renderer, http_1.Http])
    ], BookingSignUpComponent);
    return BookingSignUpComponent;
}());
exports.BookingSignUpComponent = BookingSignUpComponent;
//# sourceMappingURL=bookingSignUp.component.js.map