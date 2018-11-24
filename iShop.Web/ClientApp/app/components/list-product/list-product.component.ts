
import { ProductService } from '../../service/product.service';
import { Product } from "../../model/product";
import {  Component,Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
    selector: 'list-product',
    templateUrl: './list-product.component.html',
    styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
    @Input('name') name: any;
    @Input('title') title?: string;
    products: Product[]=[];
    bought:boolean=false;
    start: number = -1;
    end: number = 3;
    viewProduct: boolean = false;
    product?: Product;
    modalRef?: BsModalRef;
    slideConfig = {
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "enabled": true,
        "autoplay": true,
        "draggable": false,
        "autoplaySpeed": 3000
    };

    constructor(private productService: ProductService) {
        this.productService.getProducts().subscribe(p => {
            this.products = p;
        } );
    }
  


  
    afterChange(e:any) {
        console.log('afterChange');
    }

  
}
