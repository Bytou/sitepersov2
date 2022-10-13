import { Basic } from "./basic";

export class Formation extends Basic {

    title : string;
    begin : Date;
    end : Date;
    etablishment : string;
    city : string;
    postcode : number;
    desc : string; 

    constructor(title: string, begin: Date, end: Date, etablishment: string, city: string, postcode: number, desc:string) {
        super()
        this.title = title;
        this.begin = begin;
        this.end = end; 
        this.etablishment = etablishment;
        this.city = city;
        this.postcode = postcode;
        this.desc = desc;
    }

    getEndToString(): String {
        return this.dateToString(this.end)
    }
    
    getBeginToString(): String {
        return this.dateToString(this.begin)
    }

}