

export class ProductEdit {
    id: string='';
    summary: string;
    expiredDate: Date;
    addedDate?: Date;
    price: number;
    sku:string;
    name: string;
    stock: number;
    
    constructor(
        summary: string = "",
        price: number = 0,
        sku: string = "",
        name: string="",
        stock: number = 0,
        expiredDate: Date = new Date()
    )
    {
        this.summary = summary;
        this.expiredDate = expiredDate;
        this.stock = stock;
        this.price = price;
        this.sku = sku;
        this.name = name;
    }
}







