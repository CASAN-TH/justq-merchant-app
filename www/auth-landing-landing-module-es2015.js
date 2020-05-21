(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-landing-landing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/forgot/forgot.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/forgot/forgot.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/landing/landing.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/landing/landing.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content fullscreen=\"true\">\n  <img src=\"../../../assets/lannding.png\" />\n  <ion-avatar>\n    <img src=\"../../../assets/icon/icon.png\" />\n  </ion-avatar>\n\n  <h2 text-center>ยินดีต้อนรับเข้าสู่ จัดคิวออนไลน์</h2>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"register()\">ลงทะเบียน</ion-button>\n      <ion-button fill=\"clear\" expand=\"block\" (click)=\"login()\">\n        ลงชื่อเข้าใช้\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/login/login.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงชื่อเข้าใช้</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>เราดีใจที่ท่านกลับมา จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"username\"\n        type=\"tel\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงชื่อเข้าใช้</ion-button\n        >\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" text-left>\n        <ion-button fill=\"clear\" expand=\"block\" (click)=\"gotoForgot()\">\n          ลืมรหัสผ่าน คลิ๊กเลย\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงชื่อเข้าใช้ผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/policy/policy.page.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/policy/policy.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ข้อตกลงการให้บริการ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content\n  [scrollEvents]=\"true\"\n  (ionScrollStart)=\"logScrollStart()\"\n  (ionScroll)=\"logScrolling($event)\"\n  (ionScrollEnd)=\"logScrollEnd()\"\n>\n<h4>ข้อตกลงและเงื่อนไขในการให้บริการ</h4>\n<p>ข้อตกลงและเงื่อนไขในการให้บริการแอพพลิเคชั่น จัดคิว เพื่อปกป้องสิทธิของผู้ใช้บริการ โปรดอ่านเงื่อนไขการให้บริการทั้งหมดและตกลงที่จะปฏิบัติตามข้อตกลงและเงื่อนไขทั้งหมดต่อไปนี้</p>\n<p>\n  ข้อ 1 ขอบเขตของข้อตกลงและเงื่อนไขการใช้บริการ ข้อตกลงและเงื่อนไขการให้บริการนี้ทำขึ้นระหว่าง บริษัทไซเบอร์ แอดวานซ์ ซิสเต็ม\n  แอน เน็ตเวิร์ค จำกัด ซึ่งต่อไปนี้จะเรียกว่า “บริษัท” ซึ่งเป็นผู้ผลิตแอพพลิเคชั่นหรือเป็นผู้ที่ได้รับลิขสิทธิ์ในการให้บริการแอพพลิเคชั่น\n  เพื่อกำหนดข้อตกลงและเงื่อนไขการให้บริการระหว่างผู้เข้ามาใช้บริการ ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้บริการ” โดยจะใช้บริการแอพพลิเคชั่นของบริษัท\n  ซึ่งต่อไปนี้จะเรียกว่า “บริการ”\n</p>\n<p>\n  ข้อ 2 การยอมรับข้อตกลงและเงื่อนไขการใช้บริการ ผู้ใช้บริการจะต้องตกลงและปฏิบัติตามเงื่อนไขซึ่งปรากฏอยู่บนเงื่อนไขการเป็นสมาชิกบริการและเงื่อนไขการใช้บริการฉบับนี้\n  หรือในฉบับแก้ไขเพิ่มเติมอันอาจจะมีขึ้นในภายหน้า และการที่ท่านได้ตกลงในการใช้บริการของ บริษัท ถือว่าท่านได้ยินยอมและเห็นด้วยกับข้อตกลงและเงื่อนไขการให้บริการฉบับนี้แล้ว\n</p>\n<p>\n  2.1 เงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพลิเคชั่นฉบับนี้เป็นไปตามตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพิเคชั่นของสัญญาการให้บริการแอพพลิเคชั่นมือถือ\n  หากผู้ใช้บริการยอมรับต่อคำถาม ถือว่าผู้ใช้บริการได้ยอมรับเงื่อนไขการให้บริการ และถือว่าเงื่อนไขการเป็นสมาชิก และเงื่อนไขการให้บริการแอพพลิเคชั่นนี้มีผลบังคับใช้\n</p>\n<p>\n  2.2 บริษัทสามารถเปลี่ยนแปลงตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการได้ตามความเหมาะสมและเงื่อนไขการให้บริการที่มีการเปลี่ยนแปลงจะถูกประกาศให้ทราบบนแอพพลิเคชั่น จัดคิว\n</p>\n<p>\n  2.3 ผู้ใช้บริการมีหน้าที่ต้องเข้าไปเยี่ยมชมแอพพลิเคชั่นป็นระยะและตรวจสอบเนื้อหาข้อตกลงที่มีการเปลี่ยนแปลงและได้ประกาศไว้แล้ว\n  หากผู้ใช้บริการได้มีการเข้าใช้บริการหลังจากมีการประกาศเปลี่ยนแปลงไปแล้ว ถือว่าท่านได้ยอมรับและเห็นด้วยในการเปลี่ยนแปลงในเนื้อหาดังกล่าวนั้น\n  และทางบริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆของผู้ใช้บริการ อันเกิดจากการไม่ทราบเนื้อหาประกาศของข้อตกลงนั้นๆ\n</p>\n<p>\n  2.4 ผู้ใช้บริการที่อายุยังไม่ถึง 15 ปีบริบูรณ์ในวันที่ใช้บริการจะต้องมีผู้ปกครอง (ผู้แทนโดยชอบธรรม หรือผู้ปกครอง) ของผู้ใช้บริการ\n  ในการดูแล ยินยอม หรือให้คำแนะนำ เพื่อทำความเข้าใจในข้อตกลงและเงื่อนไขการให้บริการ ทั้งนี้เพื่อความสะดวกในการใช้บริการให้ถือว่าวันที่ผู้ช้บริการได้ทำการยอมรับข้อตกลงและเงื่อนไขการให้บริการของบริษัทแล้วนั้น\n  ให้ถือเป็นการยอมรับและอนุญาตในข้อตกลงเงื่อนไขการให้บริการของผู้ปกครองแล้วโดยปริยาย\n</p>\n<p>\n  2.5 ผู้ใช้บริการ จะต้องขอลงทะเบียนเป็นผู้ใช้บริการ โดยกรอกข้อมูลชื่อนามสกุลและข้อมูลส่วนตัวตามความเป็นจริง ของผู้ใช้บริการ\n  และดำเนินตามขั้นตอนการขอเป็นผู้ใช้บริการด้วยข้อมูลที่เป็นความจริง\n</p>\n</ion-content>\n<ion-footer>\n  <ion-item lines=\"none\">\n    <ion-checkbox\n      [(ngModel)]=\"accepted\"\n      [disabled]=\"!readed\"\n      color=\"primary\"\n    ></ion-checkbox>\n    <ion-label class=\"ion-text-wrap\">\n      ข้าพเจ้ารับทราบ และยินยอมตามข้อตกลงและเงื่อนไขตามที่กำหนด</ion-label\n    >\n  </ion-item>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button\n        size=\"medium\"\n        expand=\"block\"\n        [disabled]=\"!accepted\"\n        (click)=\"acceptTerm()\"\n        >ยอมรับข้อตกลง</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/register/register.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ลงทะเบียน</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <ion-avatar>\n        <img src=\"../../../assets/icon/icon.png\" />\n      </ion-avatar>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <h4>ลงทะเบียน จัดคิวออนไลน์</h4>\n    </ion-col>\n  </ion-row>\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n    <ion-item>\n      <ion-label position=\"floating\">ชื่อ</ion-label>\n      <ion-input\n        name=\"firstname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">นามสกุล</ion-label>\n      <ion-input\n        name=\"lastname\"\n        type=\"text\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">เบอร์โทรศัพท์</ion-label>\n      <ion-input\n        name=\"username\"\n        type=\"text\"\n        mask=\"(000) 000-0000\"\n        ngModel\n        required\n      >\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">รหัสผ่าน</ion-label>\n      <ion-input\n        name=\"password\"\n        [type]=\"showPassword ? 'text' : 'password'\"\n        ngModel\n        required\n      ></ion-input>\n      <ion-icon\n      [name]=\"showPassword ? 'eye'  : 'eye-off'\"\n      slot=\"end\"\n      (click)=\"togglePassword()\"\n      align-self-center\n    ></ion-icon>\n      \n    </ion-item>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-button\n          size=\"medium\"\n          type=\"submit\"\n          [disabled]=\"form.invalid\"\n          expand=\"block\"\n          >ลงทะเบียน</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <ion-row>\n    <ion-col size=\"12\" text-center>\n      <p>หรือ ลงทะเบียนผ่าน</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"5\" text-right>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/facebook-icon.png\"\n        (click)=\"onFacbookLoginClick()\"\n      />\n    </ion-col>\n    <ion-col size=\"2\"> </ion-col>\n    <ion-col size=\"5\" text-left>\n      <img\n        class=\"social\"\n        src=\"../../../assets/icon/line_icon.png\"\n        (click)=\"onLineLoginClick()\"\n      />\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/auth/forgot/forgot-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/forgot/forgot-routing.module.ts ***!
  \******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/forgot/forgot.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/forgot/forgot.module.ts ***!
  \**********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/auth/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/auth/forgot/forgot.page.ts");







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



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
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");








let LoginPage = class LoginPage {
    constructor(_location, auth, router, alertService, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
        this.modalController = modalController;
        this.showPassword = false;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
    login(form) {
        this.auth.login(form.value).subscribe(data => {
            this.alertService.presentToast("Logged In");
        }, error => {
            // console.log(error);
            this.alertService.presentToast(error.error.message);
        }, () => {
            this.close();
            this.router.navigateByUrl('');
        });
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
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
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
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/auth/policy/policy-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/auth/policy/policy-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function() { return PolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy.page */ "./src/app/auth/policy/policy.page.ts");




const routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
    }
];
let PolicyPageRoutingModule = class PolicyPageRoutingModule {
};
PolicyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicyPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/policy/policy.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/policy/policy.module.ts ***!
  \**********************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "./src/app/auth/policy/policy-routing.module.ts");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.page */ "./src/app/auth/policy/policy.page.ts");







let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"]
        ],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
    })
], PolicyPageModule);



/***/ }),

/***/ "./src/app/auth/policy/policy.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/policy/policy.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcG9saWN5L3BvbGljeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/policy/policy.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/policy/policy.page.ts ***!
  \********************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.page */ "./src/app/auth/register/register.page.ts");






let PolicyPage = class PolicyPage {
    constructor(auth, router, modalController) {
        this.auth = auth;
        this.router = router;
        this.modalController = modalController;
        this.accepted = false;
        this.readed = false;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
    logScrollStart() { }
    logScrolling() { }
    logScrollEnd() {
        this.readed = true;
    }
    acceptTerm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.close();
            const registerModal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"],
            });
            return yield registerModal.present();
        });
    }
};
PolicyPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
PolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy',
        template: __webpack_require__(/*! raw-loader!./policy.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/policy/policy.page.html"),
        styles: [__webpack_require__(/*! ./policy.page.scss */ "./src/app/auth/policy/policy.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], PolicyPage);



/***/ }),

/***/ "./src/app/auth/register/register.module.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/auth/register/register.page.ts");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  --border-width: 0px !important;\n  border: 0 !important;\n  color: transparent !important;\n}\n\nion-content {\n  --background: url('queue.jpg') 0 0/100% 30% no-repeat;\n}\n\nion-avatar {\n  margin: 10px auto;\n  width: 80% !important;\n  height: 80% !important;\n  max-width: 80px !important;\n  max-height: 80px !important;\n  border: 3px solid #e4b724c4 !important;\n  border-radius: 50px;\n}\n\n.social {\n  width: 3rem;\n  height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FEQ0E7RUFJSSxxREFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZmYgODAlLCAjZmJiMTNiZDUgOTklKTtcbiAgICBcbiAgICAvLyAtLXBhZGRpbmctdG9wOiAtNTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogODAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICBtYXgtaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7IC8vYW55IHNpemVcbiAgICAvLyBib3gtc2hhZG93OiAycHggNXB4ICNmN2NhMDRhOSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNlNGI3MjRjNCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uc29jaWFsIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcXVldWUuanBnKSAwIDAvMTAwJSAzMCUgbm8tcmVwZWF0O1xufVxuXG5pb24tYXZhdGFyIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MCUgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI2U0YjcyNGM0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5zb2NpYWwge1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");







let RegisterPage = class RegisterPage {
    constructor(_location, auth, router, alertService, modalController) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
        this.alertService = alertService;
        this.modalController = modalController;
        this.accepted = false;
        this.readed = false;
        this.showPassword = false;
    }
    ngOnInit() { }
    close() {
        // this._location.back();
        this.modalController.dismiss();
    }
    register(form) {
        this.auth.register(form.value).subscribe((data) => {
            this.alertService.presentToast("Logged In");
        }, (error) => {
            // console.log(error);
            this.alertService.presentToast(error.error.message);
        }, () => {
            this.close();
            this.router.navigateByUrl("/shop-register");
        });
    }
    togglePassword() {
        this.showPassword = !this.showPassword;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-register",
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
        _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=auth-landing-landing-module-es2015.js.map