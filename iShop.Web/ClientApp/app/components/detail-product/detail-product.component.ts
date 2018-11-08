import { Component, Output, EventEmitter,Input,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from "../../model/Cart";
import { SharedService } from '../../service/shared-service';
@Component({
    selector: 'detail-product',
    templateUrl: './detail-product.component.html',
    styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
    ngOnInit(): void {
        var currentCart = JSON.parse(String(localStorage.getItem(this.product.id)));
        if (currentCart) this.quantity = currentCart.quantity;
    }

    @Output() onclick = new EventEmitter<boolean>();
    @Input('product') product: any;
    
    max: number = 5;
    rate: number = 4;
    isReadonly: boolean = true;
    quantity: number = 1;

    constructor(private toastr: ToastrService, private sharedService: SharedService) {
     
        
    }

    addToCart() {
        this.onclick.emit(true);
        let cart: Cart = new Cart(this.product.id, this.quantity, this.product.price);
        localStorage.setItem(this.product.id, JSON.stringify(cart));
        this.sharedService.emitChange(true);
        this.toastr.success(' Bạn đã thêm vào giỏ hàng thành công!', 'Chúc mừng');
    }

    changeValue(isChange: boolean) {

        isChange ? this.quantity++ : this.quantity--;
    }


}
