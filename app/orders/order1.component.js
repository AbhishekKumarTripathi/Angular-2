"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var order1 = /** @class */ (function () {
    function order1(_orderservice) {
        this._orderservice = _orderservice;
        this.pageTitle = "Order list";
        this.showImage = false;
        this.imageWidth = 50;
    }
    order1.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    order1.prototype.ngOnInit = function () {
        console.log("this is init");
        this.Orders = this._orderservice.getOrders();
    };
    order1.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Orderlist' + message;
    };
    order1 = __decorate([
        core_1.Component({
            selector: 'order1',
            templateUrl: 'app/orders/orders.component.html',
            styleUrls: ['app/orders/order.component.css']
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], order1);
    return order1;
}());
exports.order1 = order1;
//# sourceMappingURL=order1.component.js.map