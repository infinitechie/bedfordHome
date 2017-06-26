"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// import {GoogleMapsService} from 'google-maps-angular2';
var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
        this.zoom = 15;
        this.title = 'Our Locations';
        this.lat = 53.344885;
        this.lng = -6.262755;
        this.scrollwheel = false;
        this.markers = [
            {
                lat: 53.344885,
                lng: -6.262755,
                label: 'A',
                draggable: false
            }
        ];
    }
    // constructor(private gapi: GoogleMapsService) {
    // }
    GoogleMapsComponent.prototype.ngOnInit = function () {
        // this.map.scrollwheel = false;
        // this.map = scrollwheel:  false
        // this.map.disableScrollWheelZoom();
        // this.map = {
        //     options: {
        //     scrollwheel: false
        //         }
        //     };
    };
    GoogleMapsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    //   mapClicked($event: MouseEvent) {
    //     // this.markers.push({
    //     //   lat: $event.coords.lat,
    //     //   lng: $event.coords.lng
    //     // });
    //   }
    //   mapClicked($event: MouseEvent) {
    //     this.markers.push({
    //       lat: $event.coords.lat,
    //       lng: $event.coords.lng
    //     });
    //   }
    GoogleMapsComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], GoogleMapsComponent.prototype, "scrollwheel", void 0);
    GoogleMapsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'googleMaps',
            templateUrl: 'googleMaps.component.html',
            styleUrls: ['googleMaps.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleMapsComponent);
    return GoogleMapsComponent;
}());
exports.GoogleMapsComponent = GoogleMapsComponent;
//# sourceMappingURL=googleMaps.component.js.map