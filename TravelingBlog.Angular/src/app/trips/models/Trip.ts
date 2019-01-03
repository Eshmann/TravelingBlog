import { User } from "./User";
import { PostBlog } from "./PostBlog";
export class Trip{
    id?:number;
    name?:string;
    description?:string;
    isDone?:boolean;
    user?:User;
    postBlog?:PostBlog[];
}