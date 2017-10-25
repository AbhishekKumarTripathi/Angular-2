import {Component} from '@angular/core';

import {ProductService} from './products/product.service';
import {OrderService} from './orders/order.service';

@Component({
selector:'pm-app',
template:`<div><h1 style="text-align:center;">This is Angular-2</h1><abhishek-tripathi>
</abhishek-tripathi>
<pm-product></pm-product>
<order1></order1>
<abhishek2-tripathi>
</abhishek2-tripathi><fourth-example>
</fourth-example><abhishek-fifth>
</abhishek-fifth>
<mypractice></mypractice>
</div>`,
providers:[ProductService,OrderService]

})

export class AppComponent{

}