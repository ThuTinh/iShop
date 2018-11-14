
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import * as _ from 'underscore';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OrderService } from '../../../service/order.service';
import { ShippingService } from '../../../service/shipping.service';
@Component({

    selector: 'admin-order',
    templateUrl: './admin-order.component.html',
    styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {
    modalRef: BsModalRef = new BsModalRef;
    orders: any[] = [];
    constructor(
        private orderService: OrderService,
        private shippingService: ShippingService
    ) { }

    ngOnInit() {
        let token = localStorage.getItem("token");
        token ? this.orderService.getOrders(token).subscribe(o => {
            this.orders = o;
            console.log(o);
        }
        ) : alert("Bạn không đủ quyền truy cập vào mục này");
    }

    changeStateShipping(id: string) {
        this.shippingService.ChangeStateShipping(id).subscribe(s => {
        },
            err => alert(err))
    }
    exitDetail(isExit: boolean) {
        if (isExit) {
            this.modalRef.hide();

        }
    }



}
