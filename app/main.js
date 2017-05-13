"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//Basically what is happening in this file is we are telling this page to bootstrap(load) app module, which then tells
//Our code to load App Component in our NgModule Decorator 
//# sourceMappingURL=main.js.map