// Modules
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
// import { AngularFireModule } from 'angularfire2';

//Components
import { BookingTimesComponent } from './bookingTimes/bookingTimes.component';
import { BookingServicesComponent } from './bookingServices/bookingServices.component';
import { BookingDatesComponent } from './bookingDates/bookingDates.component';
import { BookingConfirmComponent } from './bookingConfirm/bookingConfirm.component';
import { BookingBarbersComponent } from './bookingBarbers/bookingBarbers.component';

// import { HomePageComponent } from '../../homePage/homePage.component';
import { FIREBASE_CONFIG } from '../../core/constants/constants';

// Services
import { BookingService } from './service/booking.service';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';
import {SharedService} from './sharedService';

import {CapitalizePipe} from "../../shared/pipes/capitalize.pipe";

@NgModule ({ 

    imports: [CoreModule, CommonModule /*, AngularFireModule.initializeApp(FIREBASE_CONFIG)]*/],
    declarations: [ BookingBarbersComponent, BookingConfirmComponent, BookingDatesComponent, BookingServicesComponent,
    BookingTimesComponent, CapitalizePipe ],
    exports: [ BookingBarbersComponent, BookingConfirmComponent, BookingDatesComponent, BookingServicesComponent,
    BookingTimesComponent],
    providers: [ BookingService, FirebaseConfigService, SharedService ]


})

export class BookingModule { }