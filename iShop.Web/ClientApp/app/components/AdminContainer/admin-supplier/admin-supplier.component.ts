 
import { Component, OnInit,Input, TemplateRef } from '@angular/core';
import 'rxjs/add/operator/map'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SupplierService } from '../../../service/supplier.service';
@Component({
    
    selector: 'admin-supplier',
    templateUrl: './admin-supplier.component.html',
    styleUrls: ['./admin-supplier.component.css']
})
export class AdminSupplierComponent implements OnInit {
    modalRef: BsModalRef = new BsModalRef;
    suppliers:any[]=[];
    constructor(
        private supplierService: SupplierService
    ) { }
   
   

    ngOnInit() {
        let token = localStorage.getItem("token");
        token ? this.supplierService.getSuppliers(token).subscribe(s => this.suppliers = s)
            : alert("Bạn không đủ quyền truy cập vào mục này");
    }


    deleteSupplier(id:string) {
        let token = localStorage.getItem("token");
        token ? this.supplierService.deleteSupplier(token, id).subscribe(s => alert("Xóa thành công"))
            : alert("Bạn không đủ quyền truy cập vào mục này");
    }

    exitDetail(isExit: boolean) {
        if (isExit) {
            this.modalRef.hide();
         
        }
    }

  

}
