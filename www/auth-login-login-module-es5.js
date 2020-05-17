(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div>\n            <h1>Login</h1>\n          </div>\n          <div>\n            <ion-item>\n              <ion-input name=\"username\" type=\"tel\" placeholder=\"Please enter your phone number\" mask=\"(000) 000-0000\"  ngModel required>\n              </ion-input>\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" [type]=\"showPassword ? 'text' : 'password'\" placeholder=\"Password\" ngModel required></ion-input>\n              <ion-icon [name]=\"showPassword ? 'eye'  : 'eye-off'\" slot=\"end\" (click)=\"togglePassword()\"></ion-icon>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"12\" text-left>\n\n                <ion-button fill=\"clear\" (click)=\"gotoForgot()\">\n                  Forgot your password?\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div>\n            <ion-button size=\"medium\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Sign in</ion-button>\n            <ion-button size=\"medium\" expand=\"block\" fill=\"clear\" (click)=\"gotoRegister()\">\n              Sign Up\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>Sign in with</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img src=\"../../../assets/icon/facebook-icon.png\" (click)=\"onFacbookLoginClick()\">\n    </ion-col>\n    <ion-col size=\"2\">\n      \n    </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img src=\"../../../assets/icon/line_icon.png\" (click)=\"onLineLoginClick()\">\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-fixed {\n  -webkit-box-flex: 0;\n          flex: 0 0 10px;\n  width: 40px;\n  min-width: 40px;\n  font-weight: bold;\n}\n\nimg {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxtQkFBQTtVQUFBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtZml4ZWR7XG4gICAgLW1zLWZsZXg6IDAgMCAxMHB4O1xuICAgIGZsZXg6IDAgMCAxMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn0iLCIubGFiZWwtZml4ZWQge1xuICAtbXMtZmxleDogMCAwIDEwcHg7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var LoginPage = /** @class */ (function () {
    function LoginPage(_location, auth, router) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.showPassword = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.close = function () {
        this._location.back();
    };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        this.auth.login(form.value).then(function (user) {
            if (_this.auth.redirectUrl) {
                _this.router.navigateByUrl(_this.auth.redirectUrl);
            }
            else {
                _this.router.navigateByUrl('');
            }
        });
    };
    LoginPage.prototype.gotoForgot = function () {
        this.router.navigateByUrl('phoneno');
    };
    LoginPage.prototype.gotoRegister = function () {
        this.router.navigateByUrl('phoneno');
    };
    LoginPage.prototype.togglePassword = function () {
        this.showPassword = !this.showPassword;
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es5.js.map