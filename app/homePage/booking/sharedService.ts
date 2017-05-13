import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { ModelBookingDates } from '../booking/bookingDates/model/bookingDatesModel';
import { ModelBookingTimes } from '../booking/bookingTimes/model/bookingTimesModel';

@Injectable()
export class SharedService {

    message: string;
    barberTapped: string;

    private selectedBookingSource = new BehaviorSubject<string>('services');
    currentMessage = this.selectedBookingSource.asObservable();

    private BarberSelectedSource = new BehaviorSubject<string>('');
    currentMessage1 = this.BarberSelectedSource.asObservable();

    private DateSelectedSourceMain = new BehaviorSubject<string>('');
    dateSelectedMain= this.DateSelectedSourceMain.asObservable();

    private TimeSelectedSourceMain  = new BehaviorSubject<string>('');
    timeSelectedMain = this.TimeSelectedSourceMain .asObservable();

     private BarberSelectedSourceMain = new BehaviorSubject<string>('');
    barberSelectedMain = this.BarberSelectedSourceMain.asObservable();

    private CutSelectedSourceMain = new BehaviorSubject<string>('');
    cutSelectedMain = this.CutSelectedSourceMain.asObservable();
    


    dataArray: string[] = [];

    dateArray: ModelBookingDates[] = [];

    timeArray: ModelBookingTimes[] = [];

    barberSelected: string

    insertData(data: string){
        this.dataArray.unshift(data);
    }

    insertDateData(data: ModelBookingDates) {
        this.dateArray.unshift(data);
    }

    insertTimeData(data: ModelBookingTimes){
        this.timeArray.unshift(data);

    }
    constructor() {}

    // Setting Selected Information down to bottom cut off

    setDate(date: string) {
        this.DateSelectedSourceMain.next(date);
    }

    setTime(time: string) {
        this.TimeSelectedSourceMain.next(time);
    }

    setBarber(barber: string) {
        this.BarberSelectedSourceMain.next(barber);
    }

    setCut(cut: string) {
        this.CutSelectedSourceMain.next(cut);
    }


// Here is bottom cut off


    passData(message: string) {
        this.selectedBookingSource.next(message);
    }

    

    passBarberSelectedData(barber: string){
        this.BarberSelectedSource.next(barber);
    }

}