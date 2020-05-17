(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~auth-landing-landing-module~auth-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot/forgot.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงชื่อเข้าใช้</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>เราดีใจที่ท่านกลับมา จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"username\"\n        type=\"tel\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงชื่อเข้าใช้</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" text-left>\n        <ion-button fill=\"clear\" expand=\"block\" (click)=\"gotoForgot()\">\n          ลืมรหัสผ่าน คลิ๊กเลย\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงชื่อเข้าใช้ผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/forgot/forgot.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/forgot/forgot.page.ts ***!
  \********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ForgotPage = class ForgotPage {
    constructor(_location, auth, router, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
};
ForgotPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forgot",
        template: __webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.page.html"),
        styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/auth/forgot/forgot.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], ForgotPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        exports: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0px !important;\n  border: 0 !important;\n  color: transparent !important;\n}\n\nion-avatar {\n  margin: 10px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  border: 3px solid #e4b724c4 !important;\n  border-radius: 50px;\n}\n\nion-content {\n  --background: url('queue.jpg') 0 0/100% 30% no-repeat;\n}\n\n.label-fixed {\n  -webkit-box-flex: 0;\n          flex: 0 0 10px;\n  width: 40px;\n  min-width: 40px;\n  font-weight: bold;\n}\n\n.social {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBRUEsc0NBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBSUkscURBQUE7QUNISjs7QURNQTtFQUVJLG1CQUFBO1VBQUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNISjs7QURNQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICAgIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDsgLy9hbnkgc2l6ZVxuICAgIC8vIGJveC1zaGFkb3c6IDJweCA1cHggI2Y3Y2EwNGE5ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2U0YjcyNGM0ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZmYgODAlLCAjZmJiMTNiZDUgOTklKTtcbiAgICBcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAtNTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG4ubGFiZWwtZml4ZWQge1xuICAgIC1tcy1mbGV4OiAwIDAgMTBweDtcbiAgICBmbGV4OiAwIDAgMTBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zb2NpYWwge1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogM3JlbTtcbn1cbiIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1hdmF0YXIge1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgwJSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogODBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTRiNzI0YzQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG4ubGFiZWwtZml4ZWQge1xuICAtbXMtZmxleDogMCAwIDEwcHg7XG4gIGZsZXg6IDAgMCAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNvY2lhbCB7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot/forgot.page */ "./src/app/auth/forgot/forgot.page.ts");







let LoginPage = class LoginPage {
    constructor(_location, auth, router, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
        this.showPassword = false;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
    login(form) {
        // this.auth.login(form.value).then((user)=>{
        //   if(this.auth.redirectUrl){
        //     this.router.navigateByUrl(this.auth.redirectUrl);
        //   }else{
        //     this.router.navigateByUrl('');
        //   }
        // });
        // this.auth.login(form.value).subscribe(
        //   data => {
        //     this.alertService.presentToast("Logged In");
        //   },
        //   error => {
        //     console.log(error);
        //   },
        //   () => {
        //     this.dismissLogin();
        //     this.menu.enable(true);
        //     this.navCtrl.navigateRoot('/app');
        //   }
        // );
    }
    gotoForgot() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.router.navigateByUrl("phoneno");
            this.close();
            const forgotModal = yield this.modalController.create({
                component: _forgot_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"],
            });
            return yield forgotModal.present();
        });
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=default~auth-landing-landing-module~auth-login-login-module-es2015.js.map