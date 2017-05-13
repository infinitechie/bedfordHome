export class ModelBookingService {
    constructor(
        public id: string,
        public name: string,
        public cost: number,
        public description: string,
        public barbers: [string]
    ){ } 
}