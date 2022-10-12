export class Formation {

    name : string;
    begin : Date;
    end : Date;
    etablishment : string;
    city : string;
    postcode : number;
    desc : string; 

    constructor(name: string, begin: Date, end: Date, etablishment: string, city: string, postcode: number, desc:string) {
        this.name = name;
        this.begin = begin;
        this.end = end; 
        this.etablishment = etablishment;
        this.city = city;
        this.postcode = postcode;
        this.desc = desc;
    }

}