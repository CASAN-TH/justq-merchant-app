(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notify-notify-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/notify/notify.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/notify/notify.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>notify</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/notify/notify-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/notify/notify-routing.module.ts ***!
  \*************************************************/
/*! exports provided: NotifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPageRoutingModule", function() { return NotifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _notify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notify.page */ "./src/app/notify/notify.page.ts");




var routes = [
    {
        path: '',
        component: _notify_page__WEBPACK_IMPORTED_MODULE_3__["NotifyPage"]
    }
];
var NotifyPageRoutingModule = /** @class */ (function () {
    function NotifyPageRoutingModule() {
    }
    NotifyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotifyPageRoutingModule);
    return NotifyPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/notify/notify.module.ts":
/*!*****************************************!*\
  !*** ./src/app/notify/notify.module.ts ***!
  \*****************************************/
/*! exports provided: NotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPageModule", function() { return NotifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notify-routing.module */ "./src/app/notify/notify-routing.module.ts");
/* harmony import */ var _notify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notify.page */ "./src/app/notify/notify.page.ts");







var NotifyPageModule = /** @class */ (function () {
    function NotifyPageModule() {
    }
    NotifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _notify_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotifyPageRoutingModule"]
            ],
            declarations: [_notify_page__WEBPACK_IMPORTED_MODULE_6__["NotifyPage"]]
        })
    ], NotifyPageModule);
    return NotifyPageModule;
}());



/***/ }),

/***/ "./src/app/notify/notify.page.scss":
/*!*****************************************!*\
  !*** ./src/app/notify/notify.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmeS9ub3RpZnkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/notify/notify.page.ts":
/*!***************************************!*\
  !*** ./src/app/notify/notify.page.ts ***!
  \***************************************/
/*! exports provided: NotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyPage", function() { return NotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotifyPage = /** @class */ (function () {
    function NotifyPage() {
    }
    NotifyPage.prototype.ngOnInit = function () {
    };
    NotifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notify',
            template: __webpack_require__(/*! raw-loader!./notify.page.html */ "./node_modules/raw-loader/index.js!./src/app/notify/notify.page.html"),
            styles: [__webpack_require__(/*! ./notify.page.scss */ "./src/app/notify/notify.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotifyPage);
    return NotifyPage;
}());



/***/ })

}]);
//# sourceMappingURL=notify-notify-module-es5.js.map