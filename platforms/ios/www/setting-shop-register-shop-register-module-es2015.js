(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shop-register-shop-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shop-register/shop-register.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shop-register/shop-register.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ลงทะเบียนร้านค้า</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h4>ชื่อร้านค้า</h4>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <!-- <ion-label position=\"floating\">ชื่อร้านค้า</ion-label> -->\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"shop.name\" required>\n      </ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <h4>วัน-เวลา เปิดให้บริการ</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let hour of shop.openhours\">\n      <ion-col size=\"12\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\">\n              <ion-checkbox [(ngModel)]=\"hour.isopen\"></ion-checkbox>\n              {{hour.dayofweek}}\n            </ion-item>\n            <ion-row *ngFor=\"let time of hour.opentime\">\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">เปิด</ion-label>\n                  <ion-datetime\n                    display-format=\"HH:mm\"\n                    picker-format=\"HH:mm\"\n                    [(ngModel)]=\"time.start\"\n                  ></ion-datetime>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">ปิด</ion-label>\n                  <ion-datetime\n                    display-format=\"HH:mm\"\n                    picker-format=\"HH:mm\"\n                    [(ngModel)]=\"time.end\"\n                  ></ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button size=\"medium\" expand=\"block\" (click)=\"createShop()\">ลงทะเบียนร้านค้า</ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/setting/shop-register/shop-register-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/setting/shop-register/shop-register-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ShopRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRegisterPageRoutingModule", function() { return ShopRegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop-register.page */ "./src/app/setting/shop-register/shop-register.page.ts");




const routes = [
    {
        path: '',
        component: _shop_register_page__WEBPACK_IMPORTED_MODULE_3__["ShopRegisterPage"]
    }
];
let ShopRegisterPageRoutingModule = class ShopRegisterPageRoutingModule {
};
ShopRegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShopRegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/setting/shop-register/shop-register.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/setting/shop-register/shop-register.module.ts ***!
  \***************************************************************/
/*! exports provided: ShopRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRegisterPageModule", function() { return ShopRegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-register-routing.module */ "./src/app/setting/shop-register/shop-register-routing.module.ts");
/* harmony import */ var _shop_register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop-register.page */ "./src/app/setting/shop-register/shop-register.page.ts");







let ShopRegisterPageModule = class ShopRegisterPageModule {
};
ShopRegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shop_register_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShopRegisterPageRoutingModule"]
        ],
        declarations: [_shop_register_page__WEBPACK_IMPORTED_MODULE_6__["ShopRegisterPage"]]
    })
], ShopRegisterPageModule);



/***/ }),

/***/ "./src/app/setting/shop-register/shop-register.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/setting/shop-register/shop-register.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2hvcC1yZWdpc3Rlci9zaG9wLXJlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/setting/shop-register/shop-register.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/setting/shop-register/shop-register.page.ts ***!
  \*************************************************************/
/*! exports provided: ShopRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRegisterPage", function() { return ShopRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop.service */ "./src/app/setting/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShopRegisterPage = class ShopRegisterPage {
    constructor(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.shop = {
            name: "",
            openhours: [
                {
                    seq: 1,
                    dayofweek: "จันทร์",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 2,
                    dayofweek: "อังคาร",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 3,
                    dayofweek: "พุธ",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 4,
                    dayofweek: "พฤหัสบดี",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 5,
                    dayofweek: "ศุกร์",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 6,
                    dayofweek: "เสาร์",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
                {
                    seq: 7,
                    dayofweek: "อาทิตย์",
                    isopen: true,
                    opentime: [
                        {
                            start: "08:30",
                            end: "18:00",
                        },
                    ],
                },
            ],
        };
    }
    ngOnInit() { }
    createShop() {
        console.log(this.shop);
        this.shopService.createShop(this.shop).subscribe((res) => {
            console.log(res);
            this.router.navigateByUrl('');
        });
    }
};
ShopRegisterPage.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShopRegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shop-register",
        template: __webpack_require__(/*! raw-loader!./shop-register.page.html */ "./node_modules/raw-loader/index.js!./src/app/setting/shop-register/shop-register.page.html"),
        styles: [__webpack_require__(/*! ./shop-register.page.scss */ "./src/app/setting/shop-register/shop-register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ShopRegisterPage);



/***/ }),

/***/ "./src/app/setting/shop.service.ts":
/*!*****************************************!*\
  !*** ./src/app/setting/shop.service.ts ***!
  \*****************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");






let ShopService = class ShopService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.haveShop = false;
        this.SHOP_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl; // Your Node Address
        this.getToken();
    }
    getShop() {
        return this.storage.get("shop").then((data) => {
            if (data != null) {
                this.haveShop = true;
            }
            else {
                this.haveShop = false;
            }
        }, (error) => {
            this.haveShop = false;
        });
    }
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.token = yield this.storage.get("token");
            console.log(this.token);
        });
    }
    createShop(shop) {
        this.getToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer" + " " + this.token,
        });
        return this.http
            .post(`${this.SHOP_SERVER_ADDRESS}/api/shops`, shop, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            //this.storage.setItem('token', token)
            this.storage.set("shop", res.data).then(() => {
                console.log("shop Stored");
            }, (error) => console.error("Error storing item", error));
            this.haveShop = true;
            return res.data;
        }));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
], ShopService);



/***/ })

}]);
//# sourceMappingURL=setting-shop-register-shop-register-module-es2015.js.map