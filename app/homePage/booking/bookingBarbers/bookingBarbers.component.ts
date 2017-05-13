import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import {SharedService} from '../sharedService';

import { BookingService } from '../service/booking.service';

import { ModelBookingBarbers } from './model/modelBookingBarbers';

import {ModelBookingDates} from '../bookingDates/model/bookingDatesModel';


@Component({
    moduleId: module.id,
    selector: 'bookingBarbers',
    templateUrl: 'bookingBarbers.component.html',
    styleUrls: ['bookingBarbers.component.css'],
     animations: [
        trigger('signal', [
            state('void', style({
                'transform':'translateX(+110%)'
        })),
        transition('* => *', animate('.8s 1s'))
    ])]

})

export class BookingBarbersComponent implements OnInit {

     public serviceSelected: string;

     constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

     data: string[] = [];

     dates: ModelBookingDates[] = [];

     public barberSelectedToPass: string;
     
     ngOnInit(){
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        this.data = this._sharedService.dataArray;

        this._sharedService.currentMessage1.subscribe(message => this.barberSelectedToPass = message);
       
     }

       passBarberSelectedData(barberSelected: string) {
        this._sharedService.passBarberSelectedData(barberSelected); //Unecessary duplicate but still being used
        this._sharedService.passData('date');
        this.grabDates(barberSelected);

        this.passBarbersData(barberSelected);
     }
   

  grabDates(barber: string){
        this.bookingService.grabDatesArray(barber)
        .subscribe( booking => {
            this.dates.push(booking);

            //  this.bookings.push(booking);
            // console.log(this.bookings);
            
            this._sharedService.dateArray.push(booking);
            booking = '';
            

        },
        err => {
            console.error("unable to add bug -", err);
        });
        
    }

    passBarbersData(barber: string){
        this._sharedService.setBarber(barber);
    }



 }