import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { BookingService } from '../service/booking.service';

import { ModelBookingService } from './model/bookingService';

import { SharedService } from '../sharedService';

@Component({
    moduleId: module.id,
    selector: 'bookingServices',
    templateUrl: 'bookingServices.component.html',
    styleUrls: ['bookingServices.component.css'],
    animations: [
        trigger('signal', [
            state('void', style({
                'transform':'translateX(-100%)'
        })),
        transition('* => *', animate(800))
    ])]

})

export class BookingServicesComponent implements OnInit {
    signal;


        constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

        private bookings: ModelBookingService[]  = [];

        public barbersArray: string[] = []; 

        public serviceSelected: string;

        data: string[] = [];
       

    ngOnInit() {
        this.getAddedBugs();
        this.data = this._sharedService.dataArray;
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message)
    }

    getAddedBugs() {
        this.bookingService.getAddedBugs()
        .subscribe(booking => {

            this.bookings.push(booking);
            console.log(this.bookings);


        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

    grabBarbersArray(booking: ModelBookingService){
        this.bookingService.grabBarbersArray(booking)
            .subscribe( booking => {

                this.barbersArray.push(booking);
                
                this._sharedService.insertData(booking);
                booking = '';

                 },
        err => {
            console.error("unable to add bug -", err);
        });
        
        console.log(this.barbersArray);

        this._sharedService.passData("barber");
        this.passCutData(booking.name);
    }

    passCutData(cut: string){
        this._sharedService.setCut(cut);
    }
 }