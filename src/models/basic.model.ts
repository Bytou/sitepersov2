export class Basic {

        dateToString(date: Date): String {
        let endToStr: String;
        endToStr = date.toLocaleString('default', {month:"long", year:"numeric"})
        endToStr = endToStr.charAt(0).toUpperCase() + endToStr.slice(1)
        return endToStr
    }


}