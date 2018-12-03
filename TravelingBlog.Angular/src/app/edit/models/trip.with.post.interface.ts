export class TripWithPost {
    constructor(
    public id? : number,
    public name?: string,
    public isDone?: boolean,
    public description?: string,
    public postBlogs?:Post[]){}
}

export class Post{
    constructor(
        public id?: number,
        public name?: string,
        public plot?: string,
        public datOfCreation?: string,
        public tripId?:number
    ){}
}