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
//# sourceMappingURL=bookingService.js.map