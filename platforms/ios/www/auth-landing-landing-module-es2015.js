(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/landing/landing.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/landing/landing.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"true\">\n  <img src=\"../../../assets/lannding.png\" />\n  <ion-avatar>\n    <img src=\"../../../assets/icon/icon.png\" />\n  </ion-avatar>\n\n  <h2 text-center>ยินดีต้อนรับเข้าสู่ จัดคิวออนไลน์</h2>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"register()\">ลงทะเบียน</ion-button>\n      <ion-button fill=\"clear\" expand=\"block\" (click)=\"login()\">\n        ลงชื่อเข้าใช้\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/auth/landing/landing-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/landing/landing-routing.module.ts ***!
  \********************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/auth/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/landing/landing.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/landing/landing.module.ts ***!
  \************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/auth/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/auth/landing/landing.page.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.module */ "./src/app/auth/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register/register.module */ "./src/app/auth/register/register.module.ts");
/* harmony import */ var _forgot_forgot_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgot/forgot.module */ "./src/app/auth/forgot/forgot.module.ts");
/* harmony import */ var _policy_policy_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../policy/policy.module */ "./src/app/auth/policy/policy.module.ts");











let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageRoutingModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginPageModule"],
            _register_register_module__WEBPACK_IMPORTED_MODULE_8__["RegisterPageModule"],
            _forgot_forgot_module__WEBPACK_IMPORTED_MODULE_9__["ForgotPageModule"],
            _policy_policy_module__WEBPACK_IMPORTED_MODULE_10__["PolicyPageModule"]
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/auth/landing/landing.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/landing/landing.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-avatar {\n  margin: -70px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n}\n\nh2 {\n  margin: 80px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IC03MHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbn1cblxuaDIge1xuICAgIG1hcmdpbjogODBweCBhdXRvO1xufSIsImlvbi1hdmF0YXIge1xuICBtYXJnaW46IC03MHB4IGF1dG87XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBtYXJnaW46IDgwcHggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/landing/landing.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/landing/landing.page.ts ***!
  \**********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _policy_policy_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../policy/policy.page */ "./src/app/auth/policy/policy.page.ts");





let LandingPage = class LandingPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const policyModal = yield this.modalController.create({
                component: _policy_policy_page__WEBPACK_IMPORTED_MODULE_4__["PolicyPage"]
            });
            return yield policyModal.present();
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginModal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/landing/landing.page.html"),
        styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/auth/landing/landing.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=auth-landing-landing-module-es2015.js.map