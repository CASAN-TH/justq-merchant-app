(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queue-queue-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/queue/queue.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/queue/queue.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>จัดคิว</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf=\"user\">\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-avatar item-start>\n          <img [src]=\"user.profileImageURL\" />\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"9\" text-align=\"left\">\n        <h6>สวัสดีครับ คุณ {{user.displayname}}</h6>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <h2>คิวปัจจุบัน</h2>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>kantima (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 001</h1>\n          </ion-col>\n          <ion-col size=\"4\" text-align=\"left\">\n            <ion-fab-button>\n              <ion-icon name=\"call\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-fab-button color=\"danger\">\n              <ion-icon name=\"exit\"></ion-icon>\n            </ion-fab-button>\n          </ion-col>\n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <h2>คิวถัดไป</h2>\n    </ion-col>\n  </ion-row>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>July (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 002</h1>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>จิ๊กโก๋ (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 003</h1>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>บิงชู (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 004</h1>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>ปู (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 005</h1>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>จะใครล่ะ (1 คน)</ion-card-subtitle>\n      <ion-card-title>\n        <ion-row>\n          <ion-col size=\"4\">\n            <h1>A 006</h1>\n          </ion-col>\n          \n        </ion-row>\n      </ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/queue/queue-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/queue/queue-routing.module.ts ***!
  \***********************************************/
/*! exports provided: QueuePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePageRoutingModule", function() { return QueuePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _queue_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue.page */ "./src/app/queue/queue.page.ts");




var routes = [
    {
        path: '',
        component: _queue_page__WEBPACK_IMPORTED_MODULE_3__["QueuePage"]
    }
];
var QueuePageRoutingModule = /** @class */ (function () {
    function QueuePageRoutingModule() {
    }
    QueuePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], QueuePageRoutingModule);
    return QueuePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/queue/queue.module.ts":
/*!***************************************!*\
  !*** ./src/app/queue/queue.module.ts ***!
  \***************************************/
/*! exports provided: QueuePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePageModule", function() { return QueuePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _queue_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queue-routing.module */ "./src/app/queue/queue-routing.module.ts");
/* harmony import */ var _queue_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue.page */ "./src/app/queue/queue.page.ts");







var QueuePageModule = /** @class */ (function () {
    function QueuePageModule() {
    }
    QueuePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _queue_routing_module__WEBPACK_IMPORTED_MODULE_5__["QueuePageRoutingModule"]
            ],
            declarations: [_queue_page__WEBPACK_IMPORTED_MODULE_6__["QueuePage"]]
        })
    ], QueuePageModule);
    return QueuePageModule;
}());



/***/ }),

/***/ "./src/app/queue/queue.page.scss":
/*!***************************************!*\
  !*** ./src/app/queue/queue.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXVlL3F1ZXVlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/queue/queue.page.ts":
/*!*************************************!*\
  !*** ./src/app/queue/queue.page.ts ***!
  \*************************************/
/*! exports provided: QueuePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueuePage", function() { return QueuePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");




var QueuePage = /** @class */ (function () {
    function QueuePage(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
    }
    QueuePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.authService.getToken().then(function () {
            _this.authService.user().subscribe(function (res) {
                console.log(res);
                _this.user = res.data;
            }, function (error) {
                // console.log(error);
                _this.alertService.presentToast(error.error.message);
            }, function () {
            });
        });
    };
    QueuePage.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    QueuePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-queue",
            template: __webpack_require__(/*! raw-loader!./queue.page.html */ "./node_modules/raw-loader/index.js!./src/app/queue/queue.page.html"),
            styles: [__webpack_require__(/*! ./queue.page.scss */ "./src/app/queue/queue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], QueuePage);
    return QueuePage;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AlertService = /** @class */ (function () {
    function AlertService(toastController) {
        this.toastController = toastController;
    }
    AlertService.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: "top",
                            color: "dark",
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
    ]; };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], AlertService);
    return AlertService;
}());



/***/ })

}]);
//# sourceMappingURL=queue-queue-module-es5.js.map