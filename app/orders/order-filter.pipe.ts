import{Pipe,PipeTransform} from  '@angular/core';
import {OrderInterface} from './orderinterface';

@Pipe({
    name:'orderFilter'
})
export class orderFilterPipe implements PipeTransform{
    transform(value:OrderInterface[],filterBy:string):OrderInterface[]
    {
        filterBy=filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy ? value.filter( 
        (order:OrderInterface)=>order.productName.toLocaleLowerCase().indexOf(filterBy)!=-1):value;
    }
    }
