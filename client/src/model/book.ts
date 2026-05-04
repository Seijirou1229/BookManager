import type {status} from "./status.ts";

export default interface book {
    title:string;
    author:string;
    status:status;
    rating:number;
    comment:string;
    updated_date_time:Date;
    input_date_time:Date;
}