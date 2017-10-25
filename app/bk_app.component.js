"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
var order_service_1 = require("./orders/order.service");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            template: "<div><h1 style=\"text-align:center;\">This is Angular-2</h1><abhishek-tripathi>\n</abhishek-tripathi>\n<pm-product></pm-product>\n<order1></order1>\n<abhishek2-tripathi>\n</abhishek2-tripathi><fourth-example>\n</fourth-example><abhishek-fifth>\n</abhishek-fifth>\n<mypractice></mypractice>\n</div>",
            providers: [product_service_1.ProductService, order_service_1.OrderService]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=bk_app.component.js.map