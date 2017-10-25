import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import  {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {AbhishekComponent} from './abhishek.component';
import {AbhishekThirdComponent} from './abhisheksecond.component';
import {AbhishekFourthComponent} from './abhishekfourth.component';
import {AbhishekFifth} from './abhishekfifth.component';
import {mypractice} from './mypractice/mypractice.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    OrderModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    AbhishekComponent,
    AbhishekThirdComponent,
    AbhishekFourthComponent,
     AbhishekFifth,
     mypractice
  ],
  bootstrap: [ AppComponent ]
})
  export class AppModule { }
