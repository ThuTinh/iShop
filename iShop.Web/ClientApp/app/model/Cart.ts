export class Cart {
    productId: string;
    quantity: number;
    price: number;
    constructor(idProduct: string, quantity: number, price: number) {
        this.productId = idProduct;
        this.quantity = quantity;
        this.price = price;
    }
}