(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-phoneno-phoneno-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/phoneno/phoneno.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/phoneno/phoneno.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"requestOTP(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div>\n            <h1>Enter mobile number</h1>\n          </div>\n          <div>\n            <ion-item>\n              <ion-label position=\"fixed\">+66</ion-label>\n              <ion-input name=\"username\" type=\"tel\" placeholder=\"Please enter your phone number\" ngModel required>\n              </ion-input>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"12\" text-left>\n\n                <ion-button fill=\"clear\" (click)=\"gotoForgot()\">\n                  I have an invitation code\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div>\n            <ion-button size=\"medium\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Next</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/phoneno/phoneno-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/phoneno/phoneno-routing.module.ts ***!
  \********************************************************/
/*! exports provided: PhonenoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonenoPageRoutingModule", function() { return PhonenoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");




const routes = [
    {
        path: '',
        component: _phoneno_page__WEBPACK_IMPORTED_MODULE_3__["PhonenoPage"]
    }
];
let PhonenoPageRoutingModule = class PhonenoPageRoutingModule {
};
PhonenoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PhonenoPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/phoneno/phoneno.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/phoneno/phoneno.module.ts ***!
  \************************************************/
/*! exports provided: PhonenoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonenoPageModule", function() { return PhonenoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phoneno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phoneno-routing.module */ "./src/app/auth/phoneno/phoneno-routing.module.ts");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");







let PhonenoPageModule = class PhonenoPageModule {
};
PhonenoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _phoneno_routing_module__WEBPACK_IMPORTED_MODULE_5__["PhonenoPageRoutingModule"]
        ],
        declarations: [_phoneno_page__WEBPACK_IMPORTED_MODULE_6__["PhonenoPage"]]
    })
], PhonenoPageModule);



/***/ }),

/***/ "./src/app/auth/phoneno/phoneno.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/phoneno/phoneno.page.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-fixed {\n  -webkit-box-flex: 0;\n          flex: 0 0 10px;\n  width: 40px;\n  min-width: 40px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL3Bob25lbm8vcGhvbmVuby5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGgvcGhvbmVuby9waG9uZW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO1VBQUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGhvbmVuby9waG9uZW5vLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1maXhlZHtcbiAgICAtbXMtZmxleDogMCAwIDEwcHg7XG4gICAgZmxleDogMCAwIDEwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWluLXdpZHRoOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSIsIi5sYWJlbC1maXhlZCB7XG4gIC1tcy1mbGV4OiAwIDAgMTBweDtcbiAgZmxleDogMCAwIDEwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBtaW4td2lkdGg6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/phoneno/phoneno.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/phoneno/phoneno.page.ts ***!
  \**********************************************/
/*! exports provided: PhonenoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonenoPage", function() { return PhonenoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let PhonenoPage = class PhonenoPage {
    constructor(_location, auth, router) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    close() {
        this._location.back();
    }
    requestOTP(form) {
        console.log(form);
        this.router.navigateByUrl('otp');
    }
};
PhonenoPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PhonenoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneno',
        template: __webpack_require__(/*! raw-loader!./phoneno.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/phoneno/phoneno.page.html"),
        styles: [__webpack_require__(/*! ./phoneno.page.scss */ "./src/app/auth/phoneno/phoneno.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PhonenoPage);



/***/ })

}]);
//# sourceMappingURL=auth-phoneno-phoneno-module-es2015.js.map