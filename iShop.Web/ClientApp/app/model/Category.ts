export class Category {
    id:string;
    name: string;
    detail: string;
    short: string;

    constructor(name: string="",
        detail: string="",
        short: string="",id:string ="") {
        this.name = name;
        this.detail = detail;
        this.short = short
        this.id = id;
    }
}