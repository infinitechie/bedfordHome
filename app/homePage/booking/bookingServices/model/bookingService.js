"use strict";
var ModelBookingService = (function () {
    function ModelBookingService(id, name, cost, description, barbers) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.barbers = barbers;
    }
    return ModelBookingService;
}());
exports.ModelBookingService = ModelBookingService;
var Staff = (function () {
    function Staff(id, name, email, earnings, credit, notes, phoneNumber, imageUrl, imageStorageRef, unitsSold, dates) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.earnings = earnings;
        this.credit = credit;
        this.notes = notes;
        this.phoneNumber = phoneNumber;
        this.imageUrl = imageUrl;
        this.imageStorageRef = imageStorageRef;
        this.unitsSold = unitsSold;
        this.dates = dates;
    }
    return Staff;
}());
exports.Staff = Staff;
//# sourceMappingURL=bookingService.js.map