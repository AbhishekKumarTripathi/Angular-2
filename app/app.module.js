"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var abhishek_component_1 = require("./abhishek.component");
var abhisheksecond_component_1 = require("./abhisheksecond.component");
var abhishekfourth_component_1 = require("./abhishekfourth.component");
var abhishekfifth_component_1 = require("./abhishekfifth.component");
var mypractice_component_1 = require("./mypractice/mypractice.component");
var welcome_component_1 = require("./home/welcome.component");
var product_module_1 = require("./products/product.module");
var order_module_1 = require("./orders/order.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                product_module_1.ProductModule,
                order_module_1.OrderModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                abhishek_component_1.AbhishekComponent,
                abhisheksecond_component_1.AbhishekThirdComponent,
                abhishekfourth_component_1.AbhishekFourthComponent,
                abhishekfifth_component_1.AbhishekFifth,
                mypractice_component_1.mypractice
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map