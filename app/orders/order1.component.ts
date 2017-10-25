import {Component,OnInit} from '@angular/core';
import {OrderInterface} from './orderinterface'
import {OrderService} from './order.service';

@Component({
    selector:'order1',
    templateUrl:'app/orders/orders.component.html',
    styleUrls:['app/orders/order.component.css']
})

export class  order1 implements OnInit{
   pageTitle : string ="Order list";
   showImage:boolean=false;
   imageWidth:number=50;
   OrderList:string;
   Orders : OrderInterface[];

   constructor(private _orderservice:OrderService){
   }

    toggleImage():void{
        this.showImage=!this.showImage;
    }
    ngOnInit(): void{
        console.log("this is init");
        this.Orders=this._orderservice.getOrders()
    }
    onRatingClicked(message: string){
        this.pageTitle='Orderlist'+message;
        
}
}
