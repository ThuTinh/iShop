import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { ProductService } from "../../../service/product.service";
import { Image } from '../../../model/Image';
import { ProductEdit } from '../../../model/ProductEdit';


@Component({
    selector: 'admin-edit-product',
    templateUrl: './admin-edit-product.component.html',
    styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {
    ngOnInit(): void {

        let categories: string[] = [];
        this.product.categories.forEach((t: any) => categories.push(t.id));
        this.itemProduct = new ProductEdit(
        
            this.product.summary,
            this.product.price,
            this.product.sku,
            this.product.name,
            this.product.inventory.stock,
            this.product.expiredDate);

        this.itemProduct.id = this.product.id;
    }
    itemProduct: ProductEdit = new ProductEdit();
    @Output() onclick = new EventEmitter<boolean>();
    @Input('product') product: any;
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2020, 9, 15);
    imageEdit?: Image;
  

    constructor(private productService: ProductService) {
     

    }

    editProduct() {
        this.onclick.emit(true);
        let token = localStorage.getItem("token");
        console.log(this.itemProduct);
        token ? this.productService.editProduct(this.itemProduct, token)
            .subscribe(c => { this.onclick.emit(true); }, err => console.log(err)) : alert("Bạn không đủ quyền để thao tác với việc này");
      
    }

   


}
