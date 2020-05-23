(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boarding-boarding-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/boarding/boarding.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/boarding/boarding.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides pager=\"true\">\n\n    <ion-slide>\n      <div class=\"slide\">\n        <img src=\"./../../assets/slide-1.png\"/>\n        <h2>Welcome</h2>\n        <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.</p>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./../../assets/slide-2.png\"/>\n      <h2>What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./../../assets/slide-3.png\"/>\n      <h2>What is Ionic Appflow?</h2>\n      <p><b>Ionic Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./../../assets/slide-4.png\"/>\n      <h2>Ready to Play?</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"registerShop(form)\">\n        <ion-item>\n          <ion-label position=\"floating\">ชื่อร้านค้า</ion-label>\n          <ion-input\n            name=\"name\"\n            type=\"text\"\n            ngModel\n            required\n          >\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">ประเภทกิจการ</ion-label>\n          <ion-select name=\"shoptype\" ngModel required>\n            <ion-select-option value=\"1\">ร้านเสริมสวย</ion-select-option>\n            <ion-select-option value=\"2\">ร้านกาแฟ</ion-select-option>\n            <ion-select-option value=\"3\">ฟิตเนส</ion-select-option>\n            <ion-select-option value=\"4\">สนามกอล์ฟ</ion-select-option>\n            <ion-select-option value=\"5\">ร้านสัตว์เลี้ยง</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-row>\n          <ion-col size=\"12\"></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button\n              size=\"medium\"\n              type=\"submit\"\n              [disabled]=\"form.invalid\"\n              expand=\"block\"\n              > <ion-icon name=\"navigate\" slot=\"start\"></ion-icon>ระบุพิกัดร้าน</ion-button\n            >\n          </ion-col>\n        </ion-row>\n      </form>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/boarding/boarding-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/boarding/boarding-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BoardingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingPageRoutingModule", function() { return BoardingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _boarding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boarding.page */ "./src/app/boarding/boarding.page.ts");




var routes = [
    {
        path: '',
        component: _boarding_page__WEBPACK_IMPORTED_MODULE_3__["BoardingPage"]
    }
];
var BoardingPageRoutingModule = /** @class */ (function () {
    function BoardingPageRoutingModule() {
    }
    BoardingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BoardingPageRoutingModule);
    return BoardingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/boarding/boarding.module.ts":
/*!*********************************************!*\
  !*** ./src/app/boarding/boarding.module.ts ***!
  \*********************************************/
/*! exports provided: BoardingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingPageModule", function() { return BoardingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boarding-routing.module */ "./src/app/boarding/boarding-routing.module.ts");
/* harmony import */ var _boarding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boarding.page */ "./src/app/boarding/boarding.page.ts");
/* harmony import */ var _setting_set_location_set_location_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setting/set-location/set-location.module */ "./src/app/setting/set-location/set-location.module.ts");








var BoardingPageModule = /** @class */ (function () {
    function BoardingPageModule() {
    }
    BoardingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _boarding_routing_module__WEBPACK_IMPORTED_MODULE_5__["BoardingPageRoutingModule"],
                _setting_set_location_set_location_module__WEBPACK_IMPORTED_MODULE_7__["SetLocationPageModule"]
            ],
            declarations: [_boarding_page__WEBPACK_IMPORTED_MODULE_6__["BoardingPage"]]
        })
    ], BoardingPageModule);
    return BoardingPageModule;
}());



/***/ }),

/***/ "./src/app/boarding/boarding.page.scss":
/*!*********************************************!*\
  !*** ./src/app/boarding/boarding.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-slides {\n  height: 100%;\n}\n\n.swiper-slide {\n  display: block;\n}\n\n.swiper-slide h2 {\n  margin-top: 2.8rem;\n}\n\n.swiper-slide img {\n  max-height: 50%;\n  max-width: 80%;\n  margin: 60px 0 40px;\n  pointer-events: none;\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: var(--ion-color-step-600, #60646b);\n}\n\np b {\n  color: var(--ion-text-color, #000000);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9ib2FyZGluZy9ib2FyZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2JvYXJkaW5nL2JvYXJkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNESjs7QURJQTtFQUNJLHFDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9ib2FyZGluZy9ib2FyZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4OyAgXG59XG5cblxuXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3dpcGVyLXNsaWRlIGgyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjhyZW07XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiA2MHB4IDAgNDBweDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xufVxuXG5wIGIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59XG4iLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN3aXBlci1zbGlkZSBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1heC13aWR0aDogODAlO1xuICBtYXJnaW46IDYwcHggMCA0MHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTYwMCwgIzYwNjQ2Yik7XG59XG5cbnAgYiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMDAwMCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/boarding/boarding.page.ts":
/*!*******************************************!*\
  !*** ./src/app/boarding/boarding.page.ts ***!
  \*******************************************/
/*! exports provided: BoardingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardingPage", function() { return BoardingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _setting_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setting/shop.service */ "./src/app/setting/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");






var BoardingPage = /** @class */ (function () {
    function BoardingPage(modalController, shopService, router, alertService) {
        this.modalController = modalController;
        this.shopService = shopService;
        this.router = router;
        this.alertService = alertService;
    }
    BoardingPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shopService.getMyShop()];
                    case 1:
                        _a.myShop = _b.sent();
                        if (this.myShop) {
                            this.router.navigateByUrl("/app");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BoardingPage.prototype.registerShop = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.shopService.createShop(form.value).subscribe(function (res) {
                    _this.router.navigateByUrl("/set-location");
                }, function (err) {
                    _this.alertService.presentToast(err.error.message);
                });
                return [2 /*return*/];
            });
        });
    };
    BoardingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _setting_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
    ]; };
    BoardingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-boarding",
            template: __webpack_require__(/*! raw-loader!./boarding.page.html */ "./node_modules/raw-loader/index.js!./src/app/boarding/boarding.page.html"),
            styles: [__webpack_require__(/*! ./boarding.page.scss */ "./src/app/boarding/boarding.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _setting_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]])
    ], BoardingPage);
    return BoardingPage;
}());



/***/ })

}]);
//# sourceMappingURL=boarding-boarding-module-es5.js.map