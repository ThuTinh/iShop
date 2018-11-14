 
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { CategoryService } from '../../../service/category.service';
@Component({
    selector: 'admin-category',
    templateUrl: './admin-category.component.html',
    styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
    modalRef: BsModalRef = new BsModalRef;
    categories: any[]=[];
    constructor(
        private categoryService:CategoryService,
        private modalService: BsModalService
    ) { }
   
   

    ngOnInit() {
        this.categoryService.getCategories().subscribe(c => this.categories = c);
    }


    exitDetail(isExit: boolean) {
        if (isExit) {
            this.modalRef.hide();
            this.categoryService.getCategories().subscribe(c => this.categories = c);
        }
    }

    openModal(template: TemplateRef<any>) {

        this.modalRef = this.modalService.show(template);


    }

}
