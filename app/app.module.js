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
var platform_browser_1 = require('@angular/platform-browser');
var core_module_1 = require('./core/core.module');
var booking_module_1 = require('./homePage/booking/booking.module');
var app_routing_module_1 = require('./app-routing.module');
var homePage_module_1 = require('./homePage/homePage.module');
var app_component_1 = require('./app.component');
var homePage_component_1 = require('./homePage/homePage.component');
// import { GetTheAppComponent } from './homePage/getTheApp/getTheApp.component';
// import { PortfoloComponent } from './homePage/portfolio/portfolio.component';
// import { TestimonialComponent } from './homePage/testimonials/testimonials.component';
// import { LocationComponent } from './homePage/locations/locations.component';
// import { AboutUsComponent } from './homePage/aboutUs/aboutUs.component';
// import { BookingComponent } from './homePage/booking/booking.component';
// import { HeaderComponent } from './homePage/header/header.component';
// import { PricingComponent } from './homePage/pricing/pricing.component';
// import { ContactFormComponent } from './homePage/contactForm/contactForm.component';
// import { FooterComponent } from './homePage/footer/footer.component';
//bootstrap means that this is where the project is starting from if we don't have routing
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, core_module_1.CoreModule, booking_module_1.BookingModule, app_routing_module_1.AppRoutingModule, homePage_module_1.HomePageModule],
            declarations: [app_component_1.AppComponent, homePage_component_1.HomePageComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map