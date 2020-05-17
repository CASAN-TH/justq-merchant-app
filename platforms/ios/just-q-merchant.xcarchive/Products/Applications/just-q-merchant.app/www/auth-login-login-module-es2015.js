(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

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



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map