import {NgModule} from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import {ProductService} from './product.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductListComponent},
            {path:'product/:id',component:ProductDetailComponent},
        ])
    ],

    declarations:[
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
    ],
    providers:[ProductService]
})

export class ProductModule{}