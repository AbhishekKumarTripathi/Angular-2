import {NgModule} from '@angular/core';
import { order1 } from './order1.component';
import { orderFilterPipe } from './order-filter.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {OrderService} from './order.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'orders', component:order1},
        ])
    ],
    declarations:[
        order1,
        orderFilterPipe,
    ],
    providers:[OrderService]
})

export class OrderModule{}