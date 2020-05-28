(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["queue-queue-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/queue/queue.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/queue/queue.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>จัดคิว</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingText=\"ดึงลง เพื่อโหลดข้อมูลใหม่\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"กำลังโหลดข้อมูล...\"\n    >\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"queueData && queueData.length > 0\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <h2>คิวปัจจุบัน</h2>\n      </ion-col>\n    </ion-row>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>\n          {{queueData[0].customerName}} ({{queueData[0].customerQty}} คน)\n          <span class=\"time-right-item\">{{queueData[0].queTime}}</span>\n        </ion-card-subtitle>\n        <ion-card-title>\n          <ion-row>\n            <ion-col size=\"12\">\n              <h1>{{queueData[0].queId}}</h1>\n            </ion-col>\n          </ion-row>\n\n          <ion-row class=\"btn-current-queue\">\n            <ion-col size=\"4\" text-align=\"left\">\n              <ion-fab-button (click)=\"onTel()\">\n                <ion-icon name=\"call\"></ion-icon>\n              </ion-fab-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-fab-button\n                class=\"big-btn\"\n                color=\"success\"\n                (click)=\"onSuccess(queueData[0]._id)\"\n              >\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </ion-fab-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-fab-button\n                color=\"danger\"\n                (click)=\"onCancel(queueData[0]._id)\"\n              >\n                <ion-icon name=\"exit\"></ion-icon>\n              </ion-fab-button>\n            </ion-col>\n          </ion-row>\n        </ion-card-title>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <h2>คิวถัดไป</h2>\n      </ion-col>\n    </ion-row>\n\n    <div *ngFor=\"let item of queueData; let i = index\">\n      <ion-card *ngIf=\"i !== 0\">\n        <ion-card-header>\n          <ion-card-subtitle>\n            {{item.customerName}} ({{item.customerQty}} คน)\n            <span class=\"time-right-item\">{{item.queTime}}</span>\n          </ion-card-subtitle>\n          <ion-card-title>\n            <ion-row>\n              <ion-col size=\"12\">\n                <h1>{{item.queId}}</h1>\n              </ion-col>\n            </ion-row>\n          </ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n\n  <ion-row>\n    <ion-col text-center size=\"12\" *ngIf=\"queueData && queueData.length === 0\">\n      วันนี้ยังไม่มี จองคิว ร้านของคุณ...\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

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

module.exports = ".time-right-item {\n  float: right;\n}\n\n.big-btn {\n  height: 20vw;\n  width: 20vw;\n}\n\n.btn-current-queue ion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGVlcmFzYWt0dWJyaXQvRGVza3RvcC9qdXN0LXEvanVzdHEtbWVyY2hhbnQvc3JjL2FwcC9xdWV1ZS9xdWV1ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3F1ZXVlL3F1ZXVlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcXVldWUvcXVldWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWUtcmlnaHQtaXRlbSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uYmlnLWJ0biB7XG4gICAgaGVpZ2h0OiAyMHZ3O1xuICAgIHdpZHRoOiAyMHZ3O1xufVxuXG4uYnRuLWN1cnJlbnQtcXVldWUgaW9uLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSIsIi50aW1lLXJpZ2h0LWl0ZW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5iaWctYnRuIHtcbiAgaGVpZ2h0OiAyMHZ3O1xuICB3aWR0aDogMjB2dztcbn1cblxuLmJ0bi1jdXJyZW50LXF1ZXVlIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _services_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/queue.service */ "./src/app/services/queue.service.ts");





var QueuePage = /** @class */ (function () {
    function QueuePage(authService, alertService, queueService) {
        this.authService = authService;
        this.alertService = alertService;
        this.queueService = queueService;
    }
    QueuePage.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    QueuePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("ionViewDidEnter");
        this.authService.getToken().then(function () {
            _this.authService.user().subscribe(function (res) {
                console.log(res);
                _this.user = res.data;
                _this.getQueueDatas();
            }, function (error) {
                // console.log(error);
                _this.alertService.presentToast(error.error.message);
            }, function () {
            });
        });
    };
    QueuePage.prototype.doRefresh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queueService.getQueueData(this.user.ref1)];
                    case 1:
                        res = _a.sent();
                        this.queueData = res;
                        event.target.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    QueuePage.prototype.getQueueDatas = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queueService.getQueueData(this.user.ref1)];
                    case 1:
                        res = _a.sent();
                        this.queueData = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    QueuePage.prototype.onTel = function () {
        console.log('tel');
    };
    QueuePage.prototype.onSuccess = function (id) {
        this.queueService.updateQueueData(id);
        console.log("onSuccess " + id);
    };
    QueuePage.prototype.onCancel = function (id) {
        console.log("onCancel " + id);
    };
    QueuePage.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
        { type: _services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"] }
    ]; };
    QueuePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-queue',
            template: __webpack_require__(/*! raw-loader!./queue.page.html */ "./node_modules/raw-loader/index.js!./src/app/queue/queue.page.html"),
            styles: [__webpack_require__(/*! ./queue.page.scss */ "./src/app/queue/queue.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _services_queue_service__WEBPACK_IMPORTED_MODULE_4__["QueueService"]])
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



/***/ }),

/***/ "./src/app/services/queue.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/queue.service.ts ***!
  \*******************************************/
/*! exports provided: QueueService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueService", function() { return QueueService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var api_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/reservationsbyshop";
var QueueService = /** @class */ (function () {
    function QueueService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    QueueService.prototype.getQueueData = function (shopId) {
        var _this = this;
        return new Promise(function (resolve, reject) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var token, headers;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get("token")];
                    case 1:
                        token = _a.sent();
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + token);
                        this.http
                            .post(api_url, { shopId: shopId }, { headers: headers })
                            .subscribe(function (res) {
                            resolve(res.data);
                        }, reject);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    QueueService.prototype.updateQueueData = function (id) {
        console.log(id);
    };
    QueueService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    QueueService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], QueueService);
    return QueueService;
}());



/***/ })

}]);
//# sourceMappingURL=queue-queue-module-es5.js.map