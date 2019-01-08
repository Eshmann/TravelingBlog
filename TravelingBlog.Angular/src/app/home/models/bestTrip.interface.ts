export class Trip {
    constructor(
        public id?: number,
        public name?: string,
        public isDone?: boolean,
        public description?: string,
        public ratingTrip?: string,
        public firstName?: string,
        public lastName?: string
    ) { }
}
export class Rating {
    constructor(
        public Rating : number,
        public UserId: number,
        public TripId: number
    ) { }
}