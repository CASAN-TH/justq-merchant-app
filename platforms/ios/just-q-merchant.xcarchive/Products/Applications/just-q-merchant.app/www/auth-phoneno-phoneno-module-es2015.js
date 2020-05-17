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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
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





let AuthService = class AuthService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
        this.AUTH_SERVER_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl; // Your Node Address
    }
    login(user) {
        //console.log(user);
        return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/login`, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(token => {
            //this.storage.setItem('token', token)
            this.storage.set('token', token)
                .then(() => {
                console.log('Token Stored');
            }, error => console.error('Error storing item', error));
            this.token = token;
            this.isLoggedIn = true;
            return token;
        }));
    }
    register(fName, lName, email, password) {
        return this.http.post(`${this.AUTH_SERVER_ADDRESS}/auth/register`, { first_name: fName, last_name: lName, email: email, password: password });
    }
    logout() {
        console.log('Logout');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(`${this.AUTH_SERVER_ADDRESS}/auth/logout`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => {
            this.storage.remove("token");
            this.isLoggedIn = false;
            delete this.token;
            return data;
        }));
    }
    user() {
        console.log('GET User Data');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(`${this.AUTH_SERVER_ADDRESS}/user`, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(user => {
            return user;
        }));
    }
    getToken() {
        //return this.storage.getItem('token').then(
        return this.storage.get('token').then(data => {
            this.token = data;
            if (this.token != null) {
                this.isLoggedIn = true;
            }
            else {
                this.isLoggedIn = false;
            }
        }, error => {
            this.token = null;
            this.isLoggedIn = false;
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
], AuthService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");




const routes = [
    {
        path: '',
        component: _phoneno_page__WEBPACK_IMPORTED_MODULE_3__["PhonenoPage"]
    }
];
let PhonenoPageRoutingModule = class PhonenoPageRoutingModule {
};
PhonenoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PhonenoPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phoneno_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phoneno-routing.module */ "./src/app/auth/phoneno/phoneno-routing.module.ts");
/* harmony import */ var _phoneno_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./phoneno.page */ "./src/app/auth/phoneno/phoneno.page.ts");







let PhonenoPageModule = class PhonenoPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let PhonenoPage = class PhonenoPage {
    constructor(_location, auth, router) {
        this._location = _location;
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    close() {
        this._location.back();
    }
    requestOTP(form) {
        console.log(form);
        this.router.navigateByUrl('otp');
    }
};
PhonenoPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PhonenoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-phoneno',
        template: __webpack_require__(/*! raw-loader!./phoneno.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/phoneno/phoneno.page.html"),
        styles: [__webpack_require__(/*! ./phoneno.page.scss */ "./src/app/auth/phoneno/phoneno.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PhonenoPage);



/***/ })

}]);
//# sourceMappingURL=auth-phoneno-phoneno-module-es2015.js.map