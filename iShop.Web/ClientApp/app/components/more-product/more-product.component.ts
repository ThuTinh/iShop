 
import { Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map'
import { SharedService } from '../../service/shared-service';
import * as _ from 'underscore';
import { PagerService } from '../../service/page.service';
import { ProductService } from '../../service/product.service';
@Component({
    
    selector: 'more-product',
    templateUrl: './more-product.component.html',
    styleUrls: ['./more-product.component.css']
})
export class MoreProductComponent implements OnInit {
    constructor(
        private pagerService: PagerService,
        private productService: ProductService,
        private route: ActivatedRoute,
        private sharedService: SharedService
    ) { }
   
    // array of all items to be paged
     allItems: any[]=[];
    category: any = {};
    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[]=[];


    filterProduct(filter:String,items:any) {
        filter = (filter + "").toLowerCase();
        if (filter === "t" || filter === "o")
            return items.filter((p:any, i: any, ps: any) => {
                let categories = p.categories.filter((c: any) => c.short.toLowerCase().indexOf(filter) !== -1);

                if (categories.length) return true;
                return false;
            });
        return items.filter((p:any, i: any, ps: any) => {
            let categories = p.categories.filter((c: any) => c.name.toLowerCase().indexOf(filter) !== -1);

            if (categories.length) return true;
            return false;
        });
    }

    ngOnInit() {
        this.productService.getProducts().subscribe(p => {
            // set items to json response
            //this.allItems = p;
            this.category = this.route.snapshot.paramMap.get('title');
            this.allItems = this.filterProduct(this.category  + "", p);
           

            // initialize to page 1
            this.setPage(1);
        });
        this.sharedService.changeCategoryEmitted$.subscribe(info => {
            
            this.productService.getProducts().subscribe(p => {
                // set items to json response
                this.category = this.route.snapshot.paramMap.get('title');
                this.allItems = this.filterProduct(this.category + "", p);

                // initialize to page 1
                this.setPage(1);
            });
        });
       
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    

}
