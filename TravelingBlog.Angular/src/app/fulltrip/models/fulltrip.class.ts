
export class Trip{
    constructor(
        public id? : number,
        public name? : string, 
        public isdone? : boolean, 
        public description? : string,
        public firstname? : string,
        public lastname? : string,
        public postblogs? : PostBlog[]
    ){}

}
export class PostBlog{
    constructor(
        public id? : number,
        public name? : string,
        public plot? : string,
        public dateOfCreation? : string
    ) {}
}