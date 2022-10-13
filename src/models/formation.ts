import { timeStamp } from "console";

export class Formation {

    title : string;
    begin : Date;
    end : Date;
    etablishment : string;
    city : string;
    postcode : number;
    desc : string; 

    constructor(title: string, begin: Date, end: Date, etablishment: string, city: string, postcode: number, desc:string) {
        this.title = title;
        this.begin = begin;
        this.end = end; 
        this.etablishment = etablishment;
        this.city = city;
        this.postcode = postcode;
        this.desc = desc;
    }

}