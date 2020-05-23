(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shop/shop.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>shop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-border>\n    <ion-list-header>\n      Classes\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\"planet\" slot=\"start\"></ion-icon>\n      Astronomy\n      <ion-note slot=\"end\">\n        To the moon\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked=\"false\" slot=\"end\"></ion-toggle>\n      <ion-label>\n        Muggle Studies\n      </ion-label>\n      <ion-icon name=\"body\" slot=\"start\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"leaf\" slot=\"start\"></ion-icon>\n      Herbology\n      <ion-icon name=\"rose\" slot=\"end\" color=\"secondary\"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"flask\" slot=\"start\"></ion-icon>\n      Potions\n      <ion-note slot=\"end\">\n        Poisonous\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  \n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"logout()\"\n        >ออกจากระบบ</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/setting/shop/shop-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/setting/shop/shop-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ShopPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageRoutingModule", function() { return ShopPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.page */ "./src/app/setting/shop/shop.page.ts");




const routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_3__["ShopPage"]
    }
];
let ShopPageRoutingModule = class ShopPageRoutingModule {
};
ShopPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopPageRoutingModule);



/***/ }),

/***/ "./src/app/setting/shop/shop.module.ts":
/*!*********************************************!*\
  !*** ./src/app/setting/shop/shop.module.ts ***!
  \*********************************************/
/*! exports provided: ShopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPageModule", function() { return ShopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/setting/shop/shop-routing.module.ts");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/setting/shop/shop.page.ts");







let ShopPageModule = class ShopPageModule {
};
ShopPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopPageRoutingModule"]
        ],
        declarations: [_shop_page__WEBPACK_IMPORTED_MODULE_6__["ShopPage"]]
    })
], ShopPageModule);



/***/ }),

/***/ "./src/app/setting/shop/shop.page.scss":
/*!*********************************************!*\
  !*** ./src/app/setting/shop/shop.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchbar-padding {\n  padding-top: 15px;\n}\n\n.btn-icon-padding {\n  padding-top: 10px;\n}\n\n.ion-no-margin-collection {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 1rem;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0.3rem;\n  margin-bottom: 0;\n}\n\n.icon-right {\n  padding-right: 0px;\n}\n\n.btn-center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding-top: 5px;\n}\n\n.sc-ion-searchbar-ios-h {\n  padding-left: unset;\n  padding-right: unset;\n  padding-bottom: 20px;\n  padding-top: 0px;\n  /* -webkit-padding-start: 12px; */\n  /* padding-inline-start: 12px; */\n  /* -webkit-padding-end: 12px; */\n  /* padding-inline-end: 12px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9zZXR0aW5nL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERFO0VBQ0Usa0JBQUE7QUNJSjs7QURGRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREZFO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9zaG9wL3Nob3AucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhci1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuICAuYnRuLWljb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLmlvbi1uby1tYXJnaW4tY29sbGVjdGlvbiB7XG4gICAgLS1tYXJnaW4tc3RhcnQ6IDA7XG4gICAgLS1tYXJnaW4tZW5kOiAwO1xuICAgIC0tbWFyZ2luLXRvcDogMXJlbTtcbiAgICAtLW1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5pY29uLXJpZ2h0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLmJ0bi1jZW50ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgfVxuICBcbiAgLnNjLWlvbi1zZWFyY2hiYXItaW9zLWgge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAvKiAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDEycHg7ICovXG4gICAgLyogcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDEycHg7ICovXG4gICAgLyogLXdlYmtpdC1wYWRkaW5nLWVuZDogMTJweDsgKi9cbiAgICAvKiBwYWRkaW5nLWlubGluZS1lbmQ6IDEycHg7ICovXG4gIH0iLCIuc2VhcmNoYmFyLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLmJ0bi1pY29uLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmlvbi1uby1tYXJnaW4tY29sbGVjdGlvbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMXJlbTtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5pY29uLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uYnRuLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc2MtaW9uLXNlYXJjaGJhci1pb3MtaCB7XG4gIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgLyogLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAxMnB4OyAqL1xuICAvKiBwYWRkaW5nLWlubGluZS1zdGFydDogMTJweDsgKi9cbiAgLyogLXdlYmtpdC1wYWRkaW5nLWVuZDogMTJweDsgKi9cbiAgLyogcGFkZGluZy1pbmxpbmUtZW5kOiAxMnB4OyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/shop/shop.page.ts":
/*!*******************************************!*\
  !*** ./src/app/setting/shop/shop.page.ts ***!
  \*******************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");





let ShopPage = class ShopPage {
    constructor(authService, router, alertService) {
        this.authService = authService;
        this.router = router;
        this.alertService = alertService;
        this.shop = {
            name: "",
            hours: [
                {
                    seq: 1,
                    dayofweek: "Monday",
                    times: [],
                },
                {
                    seq: 2,
                    dayofweek: "Tueday",
                    times: [],
                },
                {
                    seq: 3,
                    dayofweek: "Monday",
                    times: [],
                },
                {
                    seq: 4,
                    dayofweek: "Monday",
                    times: [],
                },
                {
                    seq: 5,
                    dayofweek: "Monday",
                    times: [],
                },
                {
                    seq: 6,
                    dayofweek: "Monday",
                    times: [],
                },
                {
                    seq: 7,
                    dayofweek: "Monday",
                    times: [],
                },
            ],
        };
    }
    ngOnInit() { }
    logout() {
        this.authService.logout().then((res) => {
            console.log(res);
            this.alertService.presentToast("Logged Out");
            this.router.navigateByUrl("/app");
        });
    }
};
ShopPage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shop",
        template: __webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html"),
        styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/setting/shop/shop.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], ShopPage);



/***/ })

}]);
//# sourceMappingURL=setting-shop-shop-module-es2015.js.map