import{ Injectable} from '@angular/core';
import {Http, Response} from '@angular/http'
import {IProduct} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService {

    private _productUrl = 'api/products/products.json';

    constructor(private _http:Http){

    }

    getProducts():Observable<IProduct[]>{
        return  this._http.get(this._productUrl)
            .map((response: Response)=> <IProduct[]>response.json())
            .catch(this.handleError);

    }

    private handleError(error:Response){
        return Observable.throw(error.json().error)
    }
}