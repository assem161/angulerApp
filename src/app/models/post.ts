import { Url } from "url";

export interface post {
    id:number,
    title : string,
    body: string,
    image : string,
    url:Url;
}