import { NgModule } from '@angular/core';
import { BookingModule } from '../homePage/booking/booking.module';

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


import { CoreModule } from '../core/core.module';

import { HomePageRoutingModule } from './homePage-routing.module';



@NgModule({
    imports: [CoreModule, HomePageRoutingModule, BookingModule],

    declarations: [GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent],

    exports: [GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent],

    providers: []

})

export class HomePageModule {

}