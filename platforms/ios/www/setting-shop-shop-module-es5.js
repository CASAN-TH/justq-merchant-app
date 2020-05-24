(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shop/shop.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\"> </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"row-header\">\n    <ion-col size=\"12\">\n      <h1 *ngIf=\"myShop\">{{myShop.name}}</h1>\n    </ion-col>\n  </ion-row>\n\n \n  <ion-card *ngIf=\"user\">\n    <ion-item button (click)=\"openHours()\" lines=\"none\">\n       {{user.displayname}}\n      <ion-avatar slot=\"start\">\n        <img [src]=\"user.profileImageURL\" />\n      </ion-avatar>\n    </ion-item>\n  </ion-card>\n\n  \n  <ion-card>\n    <ion-list lines=\"none\">\n      <ion-item button (click)=\"openHours()\">\n        ข้อมูลทั่วไป\n      </ion-item>\n      <ion-item button (click)=\"openHours()\">\n        เวลาเปิด-ปิด\n      </ion-item>\n      <ion-item button (click)=\"gotoLocation()\">\n        พิกัดร้าน\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"logout()\"\n        >ออกจากระบบ</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(toastController) {
        this.toastController = toastController;
    }
    AlertService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: "top",
                            color: "dark",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AlertService);
    return AlertService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");






var ShopService = /** @class */ (function () {
    function ShopService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.haveShop = false;
        this.SHOP_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl; // Your Node Address
        // this.getToken();
        // this.getMyShop();
    }
    // getShop() {
    //   return this.storage.get("shop").then(
    //     (data) => {
    //       if (data != null) {
    //         this.haveShop = true;
    //       } else {
    //         this.haveShop = false;
    //       }
    //     },
    //     (error) => {
    //       this.haveShop = false;
    //     }
    //   );
    // }
    ShopService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get("token")];
                    case 1:
                        _a.token = _b.sent();
                        console.log(this.token);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopService.prototype.getMyShop = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get("shop")];
                    case 1:
                        _a.shop = _b.sent();
                        return [2 /*return*/, this.shop];
                }
            });
        });
    };
    ShopService.prototype.createShop = function (shop) {
        var _this = this;
        return this.http
            .post(this.SHOP_SERVER_ADDRESS + "/api/shops", shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("shop", res.data).then(function () {
                console.log("shop Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.haveShop = true;
            return res.data;
        }));
    };
    ShopService.prototype.updateShop = function (shop) {
        var _this = this;
        return this.http
            .put(this.SHOP_SERVER_ADDRESS + "/api/shops/" + shop._id, shop)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("shop", res.data).then(function () {
                console.log("shop Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.haveShop = true;
            return res.data;
        }));
    };
    ShopService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], ShopService);
    return ShopService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.page */ "./src/app/setting/shop/shop.page.ts");




var routes = [
    {
        path: '',
        component: _shop_page__WEBPACK_IMPORTED_MODULE_3__["ShopPage"]
    }
];
var ShopPageRoutingModule = /** @class */ (function () {
    function ShopPageRoutingModule() {
    }
    ShopPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShopPageRoutingModule);
    return ShopPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/setting/shop/shop-routing.module.ts");
/* harmony import */ var _shop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shop.page */ "./src/app/setting/shop/shop.page.ts");







var ShopPageModule = /** @class */ (function () {
    function ShopPageModule() {
    }
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
    return ShopPageModule;
}());



/***/ }),

/***/ "./src/app/setting/shop/shop.page.scss":
/*!*********************************************!*\
  !*** ./src/app/setting/shop/shop.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-header {\n  background-color: #fbb03b;\n  color: #ffffff;\n  height: 100px;\n  padding-left: 10px;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9zZXR0aW5nL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJvdy1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJiMDNiO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tYXZhdGFye1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBcbn1cbiIsIi5yb3ctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjAzYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shop.service */ "./src/app/setting/shop.service.ts");






var ShopPage = /** @class */ (function () {
    function ShopPage(authService, shopService, router, alertService) {
        var _this = this;
        this.authService = authService;
        this.shopService = shopService;
        this.router = router;
        this.alertService = alertService;
        this.authService.getToken().then(function () {
            _this.authService.user().subscribe(function (res) {
                console.log(res);
                _this.user = res.data;
            }, function (error) {
                // console.log(error);
                _this.alertService.presentToast(error.error.message);
            }, function () { });
        });
    }
    ShopPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shopService.getMyShop()];
                    case 1:
                        _a.myShop = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShopPage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            console.log(res);
            _this.alertService.presentToast("Logged Out");
            _this.router.navigateByUrl("/app");
        });
    };
    ShopPage.prototype.openHours = function () {
        console.log("openHours");
    };
    ShopPage.prototype.gotoLocation = function () {
        this.router.navigateByUrl("/set-location");
    };
    ShopPage.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
    ]; };
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-shop",
            template: __webpack_require__(/*! raw-loader!./shop.page.html */ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html"),
            styles: [__webpack_require__(/*! ./shop.page.scss */ "./src/app/setting/shop/shop.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-shop-shop-module-es5.js.map