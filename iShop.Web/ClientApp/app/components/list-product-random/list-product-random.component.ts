
import { ProductService } from '../../service/product.service';
import { Product } from "../../model/product";
import {  Component,Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'list-product-random',
    templateUrl: './list-product-random.component.html',
    styleUrls: ['./list-product-random.component.css']
})
export class ListProductRandomComponent {
    @Input('name') name: any = {};
    @Input('title') title: string="";
    products: Product[]=[];
    bought:boolean=false;
    slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "enabled": true,
        "autoplay": true,
        "draggable": false,
        "autoplaySpeed": 2000
    };
    viewProduct: boolean = false;
    product: Product = new Product;
    modalRef: BsModalRef = new BsModalRef;


    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe((p) => {
            this.products = p;
        });

    }
  

 
}
