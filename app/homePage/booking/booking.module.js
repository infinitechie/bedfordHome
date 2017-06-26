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
// Modules
var core_1 = require('@angular/core');
var core_module_1 = require('../../core/core.module');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var forms_2 = require('@angular/forms');
var http_1 = require('@angular/http');
// import { AngularFireModule } from 'angularfire2';
//Components
var bookingTimes_component_1 = require('./bookingTimes/bookingTimes.component');
var bookingServices_component_1 = require('./bookingServices/bookingServices.component');
var bookingDates_component_1 = require('./bookingDates/bookingDates.component');
var bookingConfirm_component_1 = require('./bookingConfirm/bookingConfirm.component');
var bookingBarbers_component_1 = require('./bookingBarbers/bookingBarbers.component');
var bookingSignUp_component_1 = require('./bookingSignUp/bookingSignUp.component');
var stripeBookingPage_component_1 = require('./stripeBookingPage/stripeBookingPage.component');
// Services
var booking_service_1 = require('./service/booking.service');
var firebase_config_service_1 = require('../../core/service/firebase-config.service');
var sharedService_1 = require('./sharedService');
var capitalize_pipe_1 = require("../../shared/pipes/capitalize.pipe");
var BookingModule = (function () {
    function BookingModule() {
    }
    BookingModule = __decorate([
        core_1.NgModule({
            imports: [core_module_1.CoreModule, common_1.CommonModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule],
            declarations: [bookingBarbers_component_1.BookingBarbersComponent, bookingConfirm_component_1.BookingConfirmComponent, bookingDates_component_1.BookingDatesComponent, bookingServices_component_1.BookingServicesComponent,
                bookingTimes_component_1.BookingTimesComponent, capitalize_pipe_1.CapitalizePipe, bookingSignUp_component_1.BookingSignUpComponent, stripeBookingPage_component_1.StripeBookingPage],
            exports: [bookingBarbers_component_1.BookingBarbersComponent, bookingConfirm_component_1.BookingConfirmComponent, bookingDates_component_1.BookingDatesComponent, bookingServices_component_1.BookingServicesComponent,
                bookingTimes_component_1.BookingTimesComponent, bookingSignUp_component_1.BookingSignUpComponent, stripeBookingPage_component_1.StripeBookingPage],
            providers: [booking_service_1.BookingService, firebase_config_service_1.FirebaseConfigService, sharedService_1.SharedService]
        }), 
        __metadata('design:paramtypes', [])
    ], BookingModule);
    return BookingModule;
}());
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map