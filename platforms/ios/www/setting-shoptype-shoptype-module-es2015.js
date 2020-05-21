(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-shoptype-shoptype-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/setting/shoptype/shoptype.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/setting/shoptype/shoptype.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon\n        slot=\"icon-only\"\n        color=\"primary\"\n        name=\"arrow-back\"\n        (click)=\"close()\"\n      ></ion-icon>\n    </ion-buttons>\n    <ion-title>ระบุประเภทกิจการ</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" class=\"card-background-page\">\n  <ion-card *ngFor=\"let item of shoptypes\">\n    <img [src]=\"item.image\" />\n    <div class=\"card-info\">\n      <div class=\"card-title\">\n        {{item.description}}\n      </div>\n      <div class=\"card-subtitle\">{{item.total}} ร้าน</div>\n    </div>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-row>\n    <ion-col padding=\"10\">\n      <ion-button size=\"medium\" expand=\"block\" (click)=\"register()\"\n        >ถัดไป</ion-button\n      >\n    </ion-col>\n  </ion-row>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/setting/shoptype/shoptype-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/setting/shoptype/shoptype-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShoptypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoptypePageRoutingModule", function() { return ShoptypePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shoptype_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoptype.page */ "./src/app/setting/shoptype/shoptype.page.ts");




const routes = [
    {
        path: '',
        component: _shoptype_page__WEBPACK_IMPORTED_MODULE_3__["ShoptypePage"]
    }
];
let ShoptypePageRoutingModule = class ShoptypePageRoutingModule {
};
ShoptypePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoptypePageRoutingModule);



/***/ }),

/***/ "./src/app/setting/shoptype/shoptype.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/setting/shoptype/shoptype.module.ts ***!
  \*****************************************************/
/*! exports provided: ShoptypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoptypePageModule", function() { return ShoptypePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shoptype_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shoptype-routing.module */ "./src/app/setting/shoptype/shoptype-routing.module.ts");
/* harmony import */ var _shoptype_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoptype.page */ "./src/app/setting/shoptype/shoptype.page.ts");







let ShoptypePageModule = class ShoptypePageModule {
};
ShoptypePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shoptype_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoptypePageRoutingModule"]
        ],
        declarations: [_shoptype_page__WEBPACK_IMPORTED_MODULE_6__["ShoptypePage"]]
    })
], ShoptypePageModule);



/***/ }),

/***/ "./src/app/setting/shoptype/shoptype.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/setting/shoptype/shoptype.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-footer {\n  background: #fff;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page .card-info {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  font-weight: bold;\n  opacity: 0.5;\n  background: #000;\n  color: #fff;\n}\n\n.card-background-page .card-title {\n  font-size: 2em;\n}\n\n.card-background-page .card-subtitle {\n  font-size: 1em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9zZXR0aW5nL3Nob3B0eXBlL3Nob3B0eXBlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2V0dGluZy9zaG9wdHlwZS9zaG9wdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NSOztBRENJO0VBQ0ksY0FBQTtBQ0NSOztBRENJO0VBQ0kseUJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2hvcHR5cGUvc2hvcHR5cGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDojZmZmO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIHtcbiAgICBpb24tY2FyZCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY2FyZC1pbmZvIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmNhcmQtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG4gICAgLmNhcmQtc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsImlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZSAuY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/setting/shoptype/shoptype.page.ts":
/*!***************************************************!*\
  !*** ./src/app/setting/shoptype/shoptype.page.ts ***!
  \***************************************************/
/*! exports provided: ShoptypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoptypePage", function() { return ShoptypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShoptypePage = class ShoptypePage {
    constructor() {
        this.shoptypes = [
            {
                description: "ร้านหมูกระทะ",
                image: "../../../assets/pockpod.jpg",
                total: 41,
            },
            {
                description: "ร้านกาแฟ",
                image: "../../../assets/cafe.jpeg",
                total: 41,
            },
            {
                description: "ร้านนวดแอนด์สปา",
                image: "../../../assets/spa.png",
                total: 41,
            },
            {
                description: "ร้านเสริมสวย",
                image: "../../../assets/salon.jpeg",
                total: 41,
            },
            {
                description: "ฟิตเนส",
                image: "../../../assets/fitness.jpg",
                total: 41,
            },
        ];
    }
    ngOnInit() { }
};
ShoptypePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shoptype",
        template: __webpack_require__(/*! raw-loader!./shoptype.page.html */ "./node_modules/raw-loader/index.js!./src/app/setting/shoptype/shoptype.page.html"),
        styles: [__webpack_require__(/*! ./shoptype.page.scss */ "./src/app/setting/shoptype/shoptype.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ShoptypePage);



/***/ })

}]);
//# sourceMappingURL=setting-shoptype-shoptype-module-es2015.js.map