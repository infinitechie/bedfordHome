import { Injectable } from '@angular/core';
// import { AngularFireAuth } from 'angularfire2/auth';

import *  as firebase from 'firebase';
require('firebase/database');
require('firebase/auth');

import  { FIREBASE_CONFIG } from '../constants/constants';

@Injectable()
export class FirebaseConfigService {


    private _database: firebase.database.Database;
    


    constructor() {
        this.configureApp();
        this.configureDatabase();

    }

   
    
//Data encapsulation (getters and setters)
    public get database() {
        return this._database;
    }

    configureApp() {
        firebase.initializeApp(FIREBASE_CONFIG);
    }

    configureDatabase() {
        this._database = firebase.database();
    }







}