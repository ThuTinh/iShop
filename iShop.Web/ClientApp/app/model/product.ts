﻿
import { Category } from "./Category";
import { Image } from "./Image";
import { Supplier } from "./Supplier";
import { Inventory } from "./Inventory";
export class Product {
    id: string;
    categories: string[];
    summary: string;
    expiredDate: Date;
    addedDate?: Date;
    price: number;
    sku:string;
    name: string;
    supplierId:string;
    images: Image[];
    inventory: Inventory;
    stock: number;

    

    
    constructor(category: string[]=[], summary: string="",  price: number=0, sku: string="",
        name: string="",
        supplier: string="",
      
        stock: number = 0,
        expiredDate: Date = new Date(),
        id: string = "",
        images: Image[] = [],
        inventory: Inventory = new Inventory
       ) {
//        this.id = id;
        this.categories = category;
        this.summary = summary;
        this.expiredDate = expiredDate;
        this.stock = stock;
        this.price = price;
        this.sku = sku;
        this.name = name;
        this.supplierId = supplier;
        this.id = id;
        this.images = images;
        this.inventory = inventory;
    }


}







