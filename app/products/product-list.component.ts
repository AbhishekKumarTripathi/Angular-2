import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css']
})

export class  ProductListComponent implements OnInit{
   pageTitle : string ="Product list";
   imageWidth: number=50;
   showImage:boolean=false;
   listFilter:string;
   errorMesssage:string
   Products : IProduct[];


    constructor(private _productService : ProductService){

    }
    toggleImage() : void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log("this is init");
        this._productService.getProducts()
            .subscribe(Products =>this.Products =Products,
            error=> this.errorMesssage =<any>error)
    }

    onRatingClicked(message: string){
        this.pageTitle='Productlist'+message;
    }

}
