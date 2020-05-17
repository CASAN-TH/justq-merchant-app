(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-phoneno-phoneno-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/phoneno/phoneno.page.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/phoneno/phoneno.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-icon slot=\"icon-only\" color=\"primary\" name=\"arrow-back\" (click)=\"close()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"requestOTP(form)\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div>\n            <h1>Enter mobile number</h1>\n          </div>\n          <div>\n            <ion-item>\n              <ion-label position=\"fixed\">+66</ion-label>\n              <ion-input name=\"username\" type=\"tel\" placeholder=\"Please enter your phone number\" ngModel required>\n              </ion-input>\n            </ion-item>\n            <ion-row>\n              <ion-col size=\"12\" text-left>\n\n                <ion-button fill=\"clear\" (click)=\"gotoForgot()\">\n                  I have an invitation code\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div>\n            <ion-button size=\"medium\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\">Next</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
// import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';

// const helper = new JwtHelperService();
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   redirectUrl: string;
//   private userData = new BehaviorSubject(null);
//   constructor(private http: HttpClient, private router: Router) {
//   }
//   login(credentials): Promise<any> {
//     return new Promise((resolve, reject) => {
//       //เรียก Api ได้ token
//       let token = "ddddd"
//       // storage token in local storage
//       window.localStorage.setItem(`token@${environment.appName}`, token);
//       // decode token to user data
//       //let decoded = helper.decodeToken(token);
//       let decoded = {};
//       // emit user Data to subscriber
//       this.userData.next(decoded);
//       // resolve user data to login page
//       resolve(decoded);
//     })
//   }
//   getUser() {
//     return this.userData.getValue();
//   }
//   logout() {
//     window.localStorage.remove(`token@${environment.appName}`).then(() => {
//       this.router.navigateByUrl('/');
//       this.userData.next(null);
//     });
//   }
// }





var AuthService = /** @class */ (function () {
    function AuthService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
        this.AUTH_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl; // Your Node Address
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        //console.log(user);
        return this.http.post(this.AUTH_SERVER_ADDRESS + "/auth/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
            //this.storage.setItem('token', token)
            _this.storage.set('token', token)
                .then(function () {
                console.log('Token Stored');
            }, function (error) { return console.error('Error storing item', error); });
            _this.token = token;
            _this.isLoggedIn = true;
            return token;
        }));
    };
    AuthService.prototype.register = function (fName, lName, email, password) {
        return this.http.post(this.AUTH_SERVER_ADDRESS + "/auth/register", { first_name: fName, last_name: lName, email: email, password: password });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        console.log('Logout');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.AUTH_SERVER_ADDRESS + "/auth/logout", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.storage.remove("token");
            _this.isLoggedIn = false;
            delete _this.token;
            return data;
        }));
    };
    AuthService.prototype.user = function () {
        console.log('GET User Data');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.AUTH_SERVER_ADDRESS + "/user", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            return user;
        }));
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        //return this.storage.getItem('token').then(
        return this.storage.get('token').then(function (data) {
            _this.token = data;
            if (_this.token != null) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }, function (error) {
            _this.token = null;
            _this.isLoggedIn = false;
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], AuthService);
    return AuthService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");




var routes = [
    {
        path: '',
        component: _phoneno_page__WEBPACK_IMPORTED_MODULE_3__["PhonenoPage"]
    }
];
var PhonenoPageRoutingModule = /** @class */ (function () {
    function PhonenoPageRoutingModule() {
    }
    PhonenoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PhonenoPageRoutingModule);
    return PhonenoPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phoneno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phoneno-routing.module */ "./src/app/auth/phoneno/phoneno-routing.module.ts");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");







var PhonenoPageModule = /** @class */ (function () {
    function PhonenoPageModule() {
    }
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
    return PhonenoPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PhonenoPage = /** @class */ (function () {
    function PhonenoPage(_location, auth, router) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
    }
    PhonenoPage.prototype.ngOnInit = function () {
    };
    PhonenoPage.prototype.close = function () {
        this._location.back();
    };
    PhonenoPage.prototype.requestOTP = function (form) {
        console.log(form);
        this.router.navigateByUrl('otp');
    };
    PhonenoPage.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PhonenoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phoneno',
            template: __webpack_require__(/*! raw-loader!./phoneno.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/phoneno/phoneno.page.html"),
            styles: [__webpack_require__(/*! ./phoneno.page.scss */ "./src/app/auth/phoneno/phoneno.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PhonenoPage);
    return PhonenoPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-phoneno-phoneno-module-es5.js.map