import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'sort',
    pure: false
})
//
export class SortDecendingPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        if (filter === 'dec') 
            return items.sort((o1:any , o2: any) => {
                return o1.shipping.shippingState < o2.shipping.shippingState ? 1 : -1;
            });
        else 
            return items.sort((o1: any, o2: any) => {
                return o1.shipping.shippingState > o2.shipping.shippingState ? 1 : -1;
            });
        
    }
}  