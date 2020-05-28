(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shop-shop-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shop/shop.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shop/shop.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 style=\"background-color: rgb(245, 244, 244);\" class=\"upload-content\">\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <img class=\"upload-img\" src=\"https://image.flaticon.com/icons/svg/1837/1837526.svg\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p class=\"text-upload-top\">อัพโหลดรูปภาพหน้าปก</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <!-- wait for node if cover img -->\n\n  <!-- <div col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3 class=\"cover-image\">\n    <img  class=\"cover-image-content\" src=\"../../assets/cafe.jpeg\">\n  </div> -->\n\n  <ion-row class=\"row-header\">\n    <ion-col size=\"8\">\n      <ion-row>\n        <h1 *ngIf=\"myShop\" class=\"txt-shop\">{{myShop.name}}</h1>\n      </ion-row>\n\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <div>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <img class=\"logo-upload\" src=\"https://image.flaticon.com/icons/svg/1837/1837635.svg\">\n        </ion-col>\n        \n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <p class=\"txt-upload\">อัพโหลดโลโก้</p>\n        </ion-col>\n       \n      </ion-row>\n    </div>\n\n     <!-- wait for node if logo img -->\n\n    <!-- <div>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <img class=\"logo\" src=\"https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg\">\n        </ion-col>\n        \n      </ion-row>\n    </div> -->\n\n    </ion-col>\n  </ion-row>\n\n\n  <ion-card *ngIf=\"user\">\n    <ion-item button (click)=\"openHours()\" lines=\"none\">\n      {{user.displayname}}\n      <ion-avatar slot=\"start\">\n        <img [src]=\"user.profileImageURL\" />\n      </ion-avatar>\n    </ion-item>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-list lines=\"none\">\n      <ion-item button (click)=\"shopEdit()\">\n        ข้อมูลทั่วไป\n      </ion-item>\n      <ion-item button (click)=\"openHours()\">\n        เวลาเปิด-ปิด\n      </ion-item>\n      <!-- <ion-item button (click)=\"shopServiceType()\">\n        ประเภทการให้บริการ\n      </ion-item> -->\n      <ion-item button (click)=\"gotoLocation()\">\n        พิกัดร้าน\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"logout()\">ออกจากระบบ</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>"

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
        this.AUTH_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl; // Your Node Address
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        //console.log(user);
        return this.http
            .post(this.AUTH_SERVER_ADDRESS + "/api/auth/signin", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("token", res.token).then(function () {
                console.log("Token Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.token = res.token;
            _this.isLoggedIn = true;
            return res.token;
        }));
    };
    AuthService.prototype.lineLogin = function (user) {
        var _this = this;
        return this.http
            .post(this.AUTH_SERVER_ADDRESS + "/api/auth/line", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("token", res.token).then(function () {
                console.log("Token Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.token = res.token;
            _this.isLoggedIn = true;
            return res.token;
        }));
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        user.email = user.firstname + "." + user.lastname + "@\u0E08\u0E31\u0E14\u0E04\u0E34\u0E27.com";
        return this.http
            .post(this.AUTH_SERVER_ADDRESS + "/api/auth/signup", user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            //this.storage.setItem('token', token)
            _this.storage.set("token", res.token).then(function () {
                console.log("Token Stored");
            }, function (error) { return console.error("Error storing item", error); });
            _this.token = res.token;
            _this.isLoggedIn = true;
            return res.token;
        }));
    };
    AuthService.prototype.logout = function () {
        console.log("Logout");
        // this.storage.clear();
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        // // return new Promise<void>((resolve))
        return Promise.resolve({ status: 200, Message: "loged out" });
    };
    AuthService.prototype.user = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer" + " " + this.token,
        });
        return this.http
            .get(this.AUTH_SERVER_ADDRESS + "/api/me", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            return user;
        }));
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        //return this.storage.getItem('token').then(
        return this.storage.get("token").then(function (data) {
            _this.token = data;
            if (_this.token != null) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }, function (error) {
            _this.token = null;
            _this.isLoggedIn = false;
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], AuthService);
    return AuthService;
}());



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
    }
    ShopService.prototype.getMyShop = function (shopId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.http
                    .get(this.SHOP_SERVER_ADDRESS + "/api/shops/" + shopId)
                    .subscribe(function (res) {
                    resolve(res.data);
                }, reject);
                return [2 /*return*/];
            });
        }); });
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

module.exports = ".row-header {\n  background-color: #fbb03b;\n  color: #ffffff;\n  height: 120px;\n  padding-left: 10px;\n}\n\nion-avatar {\n  width: 60px;\n  height: 60px;\n}\n\n.cover-image-content {\n  width: 100%;\n}\n\n.cover-image {\n  height: 170px;\n  overflow: hidden;\n}\n\n.upload-img {\n  height: 60px;\n  width: 65px;\n  margin-top: 35px;\n}\n\n.text-upload-top {\n  margin-top: -12px;\n}\n\n.upload-content {\n  height: 170px;\n}\n\n.logo-upload {\n  border-radius: 115px;\n  width: 65px;\n  height: 73px;\n}\n\n.txt-upload {\n  margin-top: -11px;\n}\n\n.logo {\n  border-radius: 115px;\n  width: 85px;\n  height: 83px;\n}\n\n.txt-shop {\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9zZXR0aW5nL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmcvc2hvcC9zaG9wLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURJQTtFQUNFLFdBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUVBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9zZXR0aW5nL3Nob3Avc2hvcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5yb3ctaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiYjAzYjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLWF2YXRhcntcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgXG59XG5cbi5jb3Zlci1pbWFnZS1jb250ZW50e1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvdmVyLWltYWdle1xuICBoZWlnaHQ6IDE3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXBsb2FkLWltZ3tcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjVweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLnRleHQtdXBsb2FkLXRvcHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG59XG5cbi51cGxvYWQtY29udGVudHtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmxvZ28tdXBsb2Fke1xuICBib3JkZXItcmFkaXVzOiAxMTVweDtcbiAgd2lkdGg6IDY1cHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiA3M3B4O1xufVxuXG4udHh0LXVwbG9hZHtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG59XG5cbi5sb2dve1xuICBib3JkZXItcmFkaXVzOiAxMTVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogODNweDtcbn1cblxuLnR4dC1zaG9we1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4iLCIucm93LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmIwM2I7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY292ZXItaW1hZ2UtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY292ZXItaW1hZ2Uge1xuICBoZWlnaHQ6IDE3MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXBsb2FkLWltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDY1cHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi50ZXh0LXVwbG9hZC10b3Age1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbn1cblxuLnVwbG9hZC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cblxuLmxvZ28tdXBsb2FkIHtcbiAgYm9yZGVyLXJhZGl1czogMTE1cHg7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDczcHg7XG59XG5cbi50eHQtdXBsb2FkIHtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG59XG5cbi5sb2dvIHtcbiAgYm9yZGVyLXJhZGl1czogMTE1cHg7XG4gIHdpZHRoOiA4NXB4O1xuICBoZWlnaHQ6IDgzcHg7XG59XG5cbi50eHQtc2hvcCB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ShopPage = /** @class */ (function () {
    function ShopPage(authService, shopService, router, alertService, _location) {
        this.authService = authService;
        this.shopService = shopService;
        this.router = router;
        this.alertService = alertService;
        this._location = _location;
    }
    ShopPage.prototype.ngOnInit = function () {
    };
    ShopPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        this.authService.getToken().then(function () {
            _this.authService.user().subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                var _a;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log(res);
                            this.user = res.data;
                            _a = this;
                            return [4 /*yield*/, this.shopService.getMyShop(this.user.ref1)];
                        case 1:
                            _a.myShop = _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, function (error) {
                // console.log(error);
                _this.alertService.presentToast(error.error.message);
            }, function () { });
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
        this.router.navigateByUrl("/shop-register");
    };
    ShopPage.prototype.shopEdit = function () {
        console.log("shopEdit");
        this.router.navigateByUrl("/shop-edit");
    };
    ShopPage.prototype.shopServiceType = function () {
        this.router.navigateByUrl("/shop-servicetype");
    };
    ShopPage.prototype.gotoLocation = function () {
        this.router.navigateByUrl("/set-location");
    };
    ShopPage.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
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
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ShopPage);
    return ShopPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-shop-shop-module-es5.js.map