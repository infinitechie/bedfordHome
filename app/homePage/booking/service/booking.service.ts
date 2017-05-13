import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';

import { ModelBookingService } from '../../booking/bookingServices/model/bookingService';

import { ModelBookingDates} from '../../booking/bookingDates/model/bookingDatesModel';
import { ModelBookingTimes} from '../../booking/bookingTimes/model/bookingTimesModel';


@Injectable()
export class BookingService { 

// user: Observable<firebase.User>;

    constructor(private fire: FirebaseConfigService /*, public afAuth: AngularFireAuth*/) { 
        // this.user = afAuth.authState;
    }

    private bookingsDbRef = this.fire.database.ref().child('/services');
    private barbersDBRef = this.fire.database.ref().child('/barbers').child('/barbers');
    


//   login() {
//     this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
//   }

//   logout() {
//     this.afAuth.auth.signOut();
//   }


    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
                this.bookingsDbRef.on('child_added', booking => {
                        const newBooking = booking.val() as ModelBookingService;
                        newBooking.id = booking.key;
                            obs.next(newBooking);
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }

    grabBarbersArray(bookingSelected: ModelBookingService):Observable<any> {
        const currentBookingRef = this.bookingsDbRef.child(bookingSelected.id).child('barbers');

         return Observable.create(obs => {
             currentBookingRef.on('child_added', booking => {
                        obs.next(booking.val());
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }

    grabDatesArray(barberSelected: string):Observable<any> {
        const currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates');

        return Observable.create(obs => {

            currentBookingRef.on('child_added', booking => {
                const newBooking = booking.val() as ModelBookingDates;
                newBooking.id = booking.key;
                obs.next(newBooking);
                console.log(newBooking);
            },
                err => {
                    obs.throw(err);
                }
            
            );
        });
    }

    grabTimesArray(barberSelected: string, dateSelected: string):Observable<any> {
        const currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates').child(dateSelected).child('times');

        return Observable.create(obs => {

            currentBookingRef.on('child_added', booking => {
                const newBooking = booking.val() as ModelBookingTimes;
                newBooking.id = booking.key;
                obs.next(newBooking);
                console.log(newBooking);
            },
                err => {
                    obs.throw(err);
                }
                
            );
        });

    }

}