(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["review-review-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/review/review.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/review/review.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>review</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/review/review-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/review/review-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageRoutingModule", function() { return ReviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review.page */ "./src/app/review/review.page.ts");




var routes = [
    {
        path: '',
        component: _review_page__WEBPACK_IMPORTED_MODULE_3__["ReviewPage"]
    }
];
var ReviewPageRoutingModule = /** @class */ (function () {
    function ReviewPageRoutingModule() {
    }
    ReviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ReviewPageRoutingModule);
    return ReviewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/review/review.module.ts":
/*!*****************************************!*\
  !*** ./src/app/review/review.module.ts ***!
  \*****************************************/
/*! exports provided: ReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-routing.module */ "./src/app/review/review-routing.module.ts");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./review.page */ "./src/app/review/review.page.ts");







var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _review_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewPageRoutingModule"]
            ],
            declarations: [_review_page__WEBPACK_IMPORTED_MODULE_6__["ReviewPage"]]
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());



/***/ }),

/***/ "./src/app/review/review.page.scss":
/*!*****************************************!*\
  !*** ./src/app/review/review.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy9yZXZpZXcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/review/review.page.ts":
/*!***************************************!*\
  !*** ./src/app/review/review.page.ts ***!
  \***************************************/
/*! exports provided: ReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPage", function() { return ReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReviewPage = /** @class */ (function () {
    function ReviewPage() {
    }
    ReviewPage.prototype.ngOnInit = function () {
    };
    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! raw-loader!./review.page.html */ "./node_modules/raw-loader/index.js!./src/app/review/review.page.html"),
            styles: [__webpack_require__(/*! ./review.page.scss */ "./src/app/review/review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReviewPage);
    return ReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=review-review-module-es5.js.map