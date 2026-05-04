import type {Status} from "./Status.ts";

export default interface Book{
    title:string;
    author:string;
    status:Status;
    rating:number;
    comment:string;
    updated_date_time:Date;
    input_date_time:Date;
}