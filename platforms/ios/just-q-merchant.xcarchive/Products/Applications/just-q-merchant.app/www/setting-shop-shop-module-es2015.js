(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shop/shop.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>shop</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button\n        size=\"medium\"\n        expand=\"block\"\n        (click)=\"logout()\"\n        >ออกจากระบบ</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJ9 */"

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
            this.router.navigateByUrl("");
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