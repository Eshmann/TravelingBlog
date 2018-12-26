export class Search{
    constructor(
        public total? : number,
        public result? : Trip[]
        ) {}

}
export class Trip{
    constructor(
        public id? : number,
        public name? : string, 
        public isdone? : boolean, 
        public description? : string,
        public firstname? : string,
        public lastname? : string
    ){}
}
export class Country{
    constructor(
        public id? : number,
        public name? : string,
        public description? : string
    ){}
}