import { Component } from '@angular/core';
import { SharedService } from '../../service/shared-service';


@Component({
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    constructor(private sharedService: SharedService) {

    }
    click() {
        this.sharedService.emitChangeCategory(true);
    }


}