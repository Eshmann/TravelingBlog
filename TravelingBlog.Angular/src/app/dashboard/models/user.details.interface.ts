export class UserDetails {
    constructor (
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public photo?: object,
        public password?: string,
        public location?: string
    ) {}
}
