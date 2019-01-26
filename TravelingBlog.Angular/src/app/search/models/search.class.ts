import { Trip } from '../../trips/models/Trip';

export class Search{
    constructor(
        public total? : number,
        public result? : Trip[]
        ) {}

}

export class Country{
    constructor(
        public id? : number,
        public name? : string,
        public description? : string
    ){}
}