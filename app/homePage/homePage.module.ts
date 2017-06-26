import { NgModule, ApplicationRef, ModuleWithProviders } from '@angular/core';
import { BookingModule } from '../homePage/booking/booking.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { AgmCoreModule } from '@agm/core';


import { CoreModule } from '../core/core.module';

import { HomePageRoutingModule } from './homePage-routing.module';
import { PortfolioModule } from './portfolio/portfolio.module';

import { GetTheAppComponent } from './getTheApp/getTheApp.component';
import { PortfoloComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './locations/locations.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsComponent } from './googleMaps/googleMaps.component';
// import {AgmMap} from '../../node_modules/@agm/core/directives/map'



@NgModule({
    imports: [CoreModule, HomePageRoutingModule,PortfolioModule, BookingModule, FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwyYoVPLnM3q29a2Ayo2ljkVLEHzE1j0E'
    }), BrowserModule ],

    declarations: [GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent,GoogleMapsComponent],

    exports: [GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent, GoogleMapsComponent],

    providers: []

})

export class HomePageModule {

}