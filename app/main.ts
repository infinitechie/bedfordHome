import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);


//Basically what is happening in this file is we are telling this page to bootstrap(load) app module, which then tells
//Our code to load App Component in our NgModule Decorator