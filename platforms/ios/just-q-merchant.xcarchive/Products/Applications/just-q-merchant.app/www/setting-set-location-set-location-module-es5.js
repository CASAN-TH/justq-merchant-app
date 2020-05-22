(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-set-location-set-location-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/set-location/set-location.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/set-location/set-location.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>setLocation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/setting/set-location/set-location-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/setting/set-location/set-location-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SetLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLocationPageRoutingModule", function() { return SetLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-location.page */ "./src/app/setting/set-location/set-location.page.ts");




var routes = [
    {
        path: '',
        component: _set_location_page__WEBPACK_IMPORTED_MODULE_3__["SetLocationPage"]
    }
];
var SetLocationPageRoutingModule = /** @class */ (function () {
    function SetLocationPageRoutingModule() {
    }
    SetLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SetLocationPageRoutingModule);
    return SetLocationPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/setting/set-location/set-location.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/setting/set-location/set-location.module.ts ***!
  \*************************************************************/
/*! exports provided: SetLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLocationPageModule", function() { return SetLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _set_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-location-routing.module */ "./src/app/setting/set-location/set-location-routing.module.ts");
/* harmony import */ var _set_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./set-location.page */ "./src/app/setting/set-location/set-location.page.ts");







var SetLocationPageModule = /** @class */ (function () {
    function SetLocationPageModule() {
    }
    SetLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _set_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetLocationPageRoutingModule"]
            ],
            declarations: [_set_location_page__WEBPACK_IMPORTED_MODULE_6__["SetLocationPage"]]
        })
    ], SetLocationPageModule);
    return SetLocationPageModule;
}());



/***/ }),

/***/ "./src/app/setting/set-location/set-location.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/setting/set-location/set-location.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0LWxvY2F0aW9uL3NldC1sb2NhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/setting/set-location/set-location.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/setting/set-location/set-location.page.ts ***!
  \***********************************************************/
/*! exports provided: SetLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetLocationPage", function() { return SetLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetLocationPage = /** @class */ (function () {
    function SetLocationPage() {
    }
    SetLocationPage.prototype.ngOnInit = function () {
    };
    SetLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-set-location',
            template: __webpack_require__(/*! raw-loader!./set-location.page.html */ "./node_modules/raw-loader/index.js!./src/app/setting/set-location/set-location.page.html"),
            styles: [__webpack_require__(/*! ./set-location.page.scss */ "./src/app/setting/set-location/set-location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetLocationPage);
    return SetLocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=setting-set-location-set-location-module-es5.js.map